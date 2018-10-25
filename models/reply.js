/* const mongoose	= require('mongoose');

const Schema	= mongoose.Schema;

const CommentSchema= new Schema({

	comment  :{type:String, require:true, unique:false},
	author	 :{
			   type:Schema.Types.ObjectId,
			   ref:"User"
	},
	Date	:{type:Date, require:true, unique:false, default:Date.now}

});

const Comment = module.exports = mongoose.model('Reply', CommentSchema);


module.exports.getCommentsByPostId = (postId, callback)=>{

}
module.exports.getCommentsByUserId = (userId,callback)=>{

}
module.exports.getCommentsByDate = (userId,callback)=>{

}
module.exports.deleteCommentBycommentId = (commentId,callback)=>{

} */
