import { GET_RESPONSE, GET_CATEGORIES, RESPONSE_LOADING,GET_QUESTIONS,QUESTION_RELOAD } from "../actions/types";

const initialState = {
  dep_response:[],
  response: [],
  categories:[],
  questions:{},
  loading: false,
  questions_loading:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESPONSE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
	case GET_QUESTIONS:
	{
      return {
        ...state,
        questions:action.payload,
      };
	}
	case GET_RESPONSE:
	{
		var categories = state.categories
		var questions = state.questions
		var lang = localStorage.getItem("lang")
		var step_arr = []
		var temp_test = []
		
		categories.forEach(d=>{
			
			var categories_lang = categories[0].categoryName.map(p=> p.lang)
			if(!categories_lang.includes(lang))
				lang = categories_lang[0]
			
			var id = d.categoryNumber;
			var hed = d.categoryName.find(s=>s.lang === lang).text;
			var opt = [];
			
			let ind =  questions.findIndex(p=> p.id === d._id)
			var cont = questions[ind].data
			if(cont.length > 0){
				var quests_id =cont.map(t=> t._id)
				var types =cont.map(t=> t.type)
				var coins =cont.map(t=> t.coin)
				var quests = cont.map(t=> t.question.find(p=> p.lang === lang).text)
				var key = cont.map(t=> t.key)
				var answers = cont.map(t=> GetAnswers(t,lang,key))
				var answers_id = cont.map(t=> GetAnswers_id(t,lang,key))
				
				for(var i = 0; i<quests.length; i++){
					var temp = [];
					temp.push(quests_id[i])
					temp.push(types[i])
					temp.push(coins[i])
					temp.push(quests[i])
					temp.push(answers[i])
					temp.push(key[i])
					temp.push(answers_id[i])
					if(key[i] !== "0")
						temp_test.push(key[i])
					opt.push(temp);
				}
			}
			step_arr.push({step_id:id,header:hed,options:opt})
		})
		return {
        ...state,
        response:step_arr,
		dep_response:temp_test,
		loading: false,
		questions_loading:true
      };
	}
	case QUESTION_RELOAD:
      return {
        ...state,
		dep_response:[],
		response: [],
		categories:[],
		questions:{},
		loading: false,
		questions_loading:false
      };
    default:
      return state;
  }
}

function GetAnswers(ans,lang,key){
	
	var temp = [];
	
	if(ans.type === "number"){
		temp.push(ans.forNumbers.start)
		temp.push(ans.forNumbers.end)
	}
	else if(ans.type === "selectOne"){
		temp = ans.answers.filter(p=> p.answer.lang === lang).map(k=> k.answer.info)
	}
	else if(ans.type === "linked"){
		var info = ans.answers.filter(p=> p.answer.lang === lang).map(k=> k.answer.info)
		var keys = ans.answers.filter(p=> p.answer.lang === lang).map(k=> k.answer.key)
		temp = setLinked(info,keys)
		temp.push({SelectedList:[]})
		
	}
	else
		temp = []
	return temp;
}

function GetAnswers_id(ans,lang,key){
	
	var temp = [];
	
	if(ans.type === "number"){
		temp = ["number_id"]
	}
	else if(ans.type === "selectOne"){
		temp = ans.answers.filter(p=> p.answer.lang === lang).map(k=> k._id)
	}
	else if(ans.type === "linked"){
		var _id = ans.answers.filter(p=> p.answer.lang === lang).map(k=> k._id)
		var keys = ans.answers.filter(p=> p.answer.lang === lang).map(k=> k.answer.key)
		temp = setLinked(_id,keys)
		temp.push({SelectedList:[]})
	}
	else
		temp = []
	return temp;
}

function setLinked(info,key){
	var temp = [{key:"Select",values:[]}];
	for(var i = 0; i<info.length; i++){
		var x = temp.findIndex(k=> k.key === key[i])
		if(x === -1){
			temp.push({key:key[i],values:[info[i]]})
        }else{
			temp[x].values.push(info[i])
		}
	}
	return temp
}
