// import Quill from 'quill';
import Fuse from 'fuse.js';
import emojiList from './emoji-list.js';

//const Delta = window.Quill.import('delta');
const Module = window.Quill.import('core/module');

class ToolbarEmoji extends Module {
  constructor(quill, options) {
    super(quill, options);
    this.quill = quill;
    this.toolbar = quill.getModule('toolbar');
    if (typeof this.toolbar !== 'undefined')
      this.toolbar.addHandler('emoji', this.checkPalatteExist);

    var emojiBtns = document.getElementsByClassName('ql-emoji');
    if (emojiBtns) {
      [].slice.call( emojiBtns ).forEach(function ( emojiBtn ) {
        emojiBtn.innerHTML = options.buttonIcon;
      });
    }
  }

  checkPalatteExist() {
    let quill = this.quill;
    fn_checkDialogOpen(quill);
    this.quill.on('text-change', function(delta, oldDelta, source) {
      if (source === 'user') {
        fn_close();
        fn_updateRange(quill);
      }
    });
  }
}

ToolbarEmoji.DEFAULTS = {
  buttonIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>'
};

function fn_close(){
  let ele_emoji_plate = document.getElementById('emoji-palette');
  document.getElementById('emoji-close-div').style.display = "none";
  if (ele_emoji_plate) {ele_emoji_plate.remove()}
}

function fn_checkDialogOpen(quill){
  let elementExists = document.getElementById("emoji-palette");
  if (elementExists) {
    elementExists.remove();
  }
  else{
    fn_showEmojiPalatte(quill);
  }
}

function fn_updateRange(quill){
  let range = quill.getSelection();
  return range;
}

function fn_showEmojiPalatte(quill) {
  let ele_emoji_area = document.createElement('div');
  //let toolbar_container = document.querySelector('.ql-toolbar');
  let range = quill.getSelection();
  const atSignBounds = quill.getBounds(range.index);

  quill.container.appendChild(ele_emoji_area);
  let paletteMaxPos = atSignBounds.left + 250;//palette max width is 250
  ele_emoji_area.id = 'emoji-palette';
  ele_emoji_area.style.top = 10 + atSignBounds.top + atSignBounds.height + "px";
  if (paletteMaxPos > quill.container.offsetWidth) {
    ele_emoji_area.style.left = (atSignBounds.left - 250)+ "px";
  }
  else{
    ele_emoji_area.style.left = atSignBounds.left + "px";
  }


  let tabToolbar = document.createElement('div');
  tabToolbar.id="tab-toolbar";
  ele_emoji_area.appendChild(tabToolbar);

  //panel
  let panel = document.createElement('div');
  panel.id="tab-panel";
  ele_emoji_area.appendChild(panel);

  var emojiType = [
    {'type':'p','name':'people','content':'<div class="i-people"></div>'},
    {'type':'n','name':'nature','content':'<div class="i-nature"></div>'},
    {'type':'d','name':'food','content':'<div class="i-food"></div>'},
    {'type':'s','name':'symbols','content':'<div class="i-symbols"></div>'},
    {'type':'a','name':'activity','content':'<div class="i-activity"></div>'},
    {'type':'t','name':'travel','content':'<div class="i-travel"></div>'},
    {'type':'o','name':'objects','content':'<div class="i-objects"></div>'},
    {'type':'f','name':'flags','content':'<div class="i-flags"></div>'}
  ];

  let tabElementHolder = document.createElement('ul');
  tabToolbar.appendChild(tabElementHolder);

  if (document.getElementById('emoji-close-div') === null) {
    let closeDiv = document.createElement('div');
    closeDiv.id = 'emoji-close-div';
    closeDiv.addEventListener("click", fn_close, false);
    document.getElementsByTagName('body')[0].appendChild(closeDiv);
  }
  else{
    document.getElementById('emoji-close-div').style.display = "block";
  }


  emojiType.forEach(function(emojiType) {
    //add tab bar
    let tabElement = document.createElement('li');
    tabElement.classList.add('emoji-tab');
    tabElement.classList.add('filter-'+emojiType.name);
    let tabValue = emojiType.content;
    tabElement.innerHTML = tabValue;
    tabElement.dataset.filter = emojiType.type;
    tabElementHolder.appendChild(tabElement);

    let emojiFilter = document.querySelector('.filter-'+emojiType.name);
    emojiFilter.addEventListener('click',function(){
      let tab = document.querySelector('.active');
      if (tab) {
        tab.classList.remove('active');
      }
      emojiFilter.classList.toggle('active');
      fn_updateEmojiContainer(emojiFilter,panel,quill);
    })
  });
  fn_emojiPanelInit(panel,quill);
}

function fn_emojiPanelInit(panel,quill){
  fn_emojiElementsToPanel('p', panel, quill);
  document.querySelector('.filter-people').classList.add('active');
}

function fn_emojiElementsToPanel(type,panel,quill){
  let fuseOptions = {
    shouldSort: true,
    matchAllTokens: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [
      "category"
    ]
  };
  let fuse = new Fuse(emojiList, fuseOptions);
  let result = fuse.search(type);
  result.sort(function (a, b) {
    return a.emoji_order - b.emoji_order;
  });

  quill.focus();
  let range = fn_updateRange(quill);

  result.forEach(function(emoji) {
    let span = document.createElement('span');
    let t = document.createTextNode(emoji.shortname);
    span.appendChild(t);
    span.classList.add('bem');
    span.classList.add('bem-' + emoji.name);
    span.classList.add('ap');
    span.classList.add('ap-' + emoji.name);
    let output = '' + emoji.code_decimal + '';
    span.innerHTML = output + ' ';
    panel.appendChild(span);

    let customButton = document.querySelector('.bem-' + emoji.name);
    if (customButton) {
      customButton.addEventListener('click', function() {
        let emoji_icon_html =makeElement("span", {className: "ico", innerHTML: ''+emoji.code_decimal+' ' });
        let emoji_icon = emoji_icon_html.innerHTML;
		if(!emoji)
			quill.insertEmbed(range.index, 'emoji', emoji_icon);
		else
			quill.insertEmbed(range.index, 'emoji', emoji);
        fn_close();
      });
    }
  });
}

function fn_updateEmojiContainer(emojiFilter,panel,quill){
  while (panel.firstChild) {
    panel.removeChild(panel.firstChild);
  }
  let type = emojiFilter.dataset.filter;
  fn_emojiElementsToPanel(type,panel,quill);
}

function makeElement(tag, attrs, ...children) {
  const elem = document.createElement(tag);
  Object.keys(attrs).forEach(key => elem[key] = attrs[key]);
  children.forEach(child => {
    if (typeof child === "string")
      child = document.createTextNode(child);
    elem.appendChild(child);
  });
  return elem;
}

export default ToolbarEmoji;
