var express = require("express");
var router = express.Router();
var request = require('request-promise');

// The user input is passed as a parameter to the route 
router.get('/:time', function(req, res, next){   
   
    (async function main() {
        try {
            
            // Get path id and path name from "http://feed.opendata.imet.gr:23577/itravel/paths.json"
            // Data is taken in json format
            urls_path=['http://feed.opendata.imet.gr:23577/itravel/paths.json'];

            console.log("Results are loading...");

            for(var i=0; i<urls_path.length; i++){
                var path = [urls_path[i]];
                var result_path = await Promise.all(path.map((url) => {
                    return request({
                        url,
                        method: 'GET'
                    }); 
                }));
            }
            
            var path = JSON.parse(result_path[0]);
            var len = path.length;

            path_id = new Array();
            path_name = new Array();
            path_origin = new Array();
            path_dest = new Array();

            for (var i=0; i< len; i++) {
                path_id.push(path[i].Path_id);
                path_name.push(path[i].Path_Name);
            }

            // Get duration (if exists) of above paths from "http://feed.opendata.imet.gr:23577/itravel/traveltimes.json"
            // Data is taken in json format
            urls_duration = ['http://feed.opendata.imet.gr:23577/itravel/traveltimes.json'];
            for(var i=0; i<urls_duration.length; i++){
                var duration = [urls_duration[i]];
                var result_duration = await Promise.all(duration.map((url) => {
                    return request({
                        url,
                        method: 'GET'
                    }); 
                }));
            }

            var duration = JSON.parse(result_duration[0]);
            var len = duration.length;

            path_duration = new Array();
            path_id_duration = new Array(229);

            // Save path duration for each path id
            for (var i=0; i < len; i++) {
                path_id_duration[duration[i].Path_id] = duration[i].Duration
            }

            for(var j=0; j<path.length; j++){
                // Convert parameter given in route to integer 
                req.params.time = parseInt(req.params.time);

                // Convert path durations to integer
                path_id_duration[path[j].Path_id] = parseInt(path_id_duration[path[j].Path_id]);
                
                // If duration is not null and is less than given duration then path is saved in the results
                if(path_id_duration[path[j].Path_id]!=null && path_id_duration[path[j].Path_id]<=req.params.time){
                    path_duration.push({"Path_id": path[j].Path_id , "Path_name": path[j].Path_Name,
                    "Duration":path_id_duration[path[j].Path_id] });
                }
            }

           res.send(path_duration); 
        }catch(e) {
            console.log(e.message);
        }
            
    })();

}); 
module.exports=router;