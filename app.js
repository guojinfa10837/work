var express = require("express");
var path = require("path");
var port = process.env.PORT || 3000;
var _ = require("underscore");
var mongoose = require("mongoose");
var Movie = require("./models/movie");
var app = express();

mongoose.connect("mongoose://localhost/imooc");

app.set("views","./views/pages/");
//app.use(express.bodyParser());
//app.use(express.static(path.jion(_dirname,"")))

app.set("view engine","jade")
app.listen(port);

console.log("imooc started on port"+port);

// index page
app.get("/",function(req,res){
   Movie.fetch(function(err,movies){
   	  if(err){
   	  	console.log(err);

   	  }
   	  res.render("index",{
		title:"imooc 首页",
		movies: movies
	  })

   })

	/*res.render("index",{
		title:"imooc 首页",
		movies:[
		  {
		  	id:1,
		  	poster:"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3099473252,1052577239&amp;fm=85&amp;s=07151BC20BED08803B5A2EA303007017",
		  	title:"战狼1"
		  },
		  {
		  	id:2,
		  	poster:"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3099473252,1052577239&amp;fm=85&amp;s=07151BC20BED08803B5A2EA303007017",
		  	title:"战狼2"
		  },
		  {
		  	id:3,
		  	poster:"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3099473252,1052577239&amp;fm=85&amp;s=07151BC20BED08803B5A2EA303007017",
		  	title:"战狼3"
		  }

		]
	})*/
})

app.get("/movie/:id",function(req,res){
	var id = req.params.id;
	Movie.findById(id,function(err,movie){
      if(err){console.log(err)};
      res.render("detaile",{
		title:"imooc"+ movie.title,
		movie:movie
	  });

	});
	/*res.render("detaile",{
		title:"imooc 详情页",
		movie:{
			flash:"blob:https://www.imooc.com/0d434fc4-e460-4021-8d13-cac282749965",
			title:"战狼3",
			doctor:"吴京",
			country:"中国",
			language:"中文",
			year:"2017-08-08",
			summary:"有缘无份啊  我们终将成了陌生人"

		}
	})*/
});

app.get("/admin/movie",function(req,res){
	res.render("admin",{
		title:"imooc 后台录入页",
		movie:{
			flash:"",
			title:"",
			doctor:"",
			country:"",
			language:"",
			year:"",
			summary:""

		}

	})
})
//admin updata movie
app.get("./admin/updata/:id",function(req,res){
	var id = res.params.id;
	if (id){
		Movie.findById(id,function(err,movie){
			res.render("admin",{
				title:"imooc 后台更新页",
				movie:movie
			})
		})
	}
})
// admin post moiv
app.post("./admin/movie/new",function(res,req){
	var id = req.body.movie.id;
	var movieObj = req.body.movie;
	var _movie
	if(id != 'undefined'){
		Movie.findById(id,function(err,movie){
			if(err){
				console.log(err)
		    }
		    _movie = _.extend(movie,movieObj);
		    _movie.save(function(err,movie){
		    	if(err){
		    		console.log(err);

		    	}
		    	res.redirect("/movie/"+movie.id)
		    })
		})
	}else{
		_movie = new Movie({
			dector:movieObj.dector,
			title:movieObj.title,
			country:movieObj.country,
			language:movieObj.language,
			year:movieObj.year,
			poster:movieObj.poster,
			summary:movieObj.summary,
			flash:movieObj.flash,

		});
		_movie.save(function(err,movie){
		    	if(err){
		    		console.log(err);

		    	}
		    	res.redirect("/movie/"+movie.id);
		})

	}
})

app.get("/admin/list",function(req,res){
	Movie.fetch(function(err,movie){
      if(err){console.log(err)};
      res.render("list",{
		title:"imooc 列表页",
		movies:movie
	  })

	});
	
	/*res.render("list",{
		title:"imooc 列表页",
		movies:[
		  {
		  	id:1,
		  	poster:"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3099473252,1052577239&amp;fm=85&amp;s=07151BC20BED08803B5A2EA303007017",
		  	title:"战狼1",
		  	doctor:"吴京",
			country:"中国",
			language:"中文",
			year:"2017-08-08",
			summary:"有缘无份啊  我们终将成了陌生人"
          },
		  {
		  	id:2,
		  	poster:"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3099473252,1052577239&amp;fm=85&amp;s=07151BC20BED08803B5A2EA303007017",
		  	title:"战狼2",
		  	doctor:"吴京",
			country:"中国",
			language:"中文",
			year:"2017-08-08",
			summary:"有缘无份啊  我们终将成了陌生人"
		  },
		  {
		  	id:3,
		  	poster:"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3099473252,1052577239&amp;fm=85&amp;s=07151BC20BED08803B5A2EA303007017",
		  	title:"战狼3",
		  	doctor:"吴京",
			country:"中国",
			language:"中文",
			year:"2017-08-08",
			summary:"有缘无份啊  我们终将成了陌生人"
		  }
		]
	})*/
})




