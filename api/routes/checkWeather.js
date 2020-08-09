var express = require("express");
var router = express.Router();
var request = require('request-promise');

router.get('/', function(req,res,next){
        (async function main() {
            try {

                // Get information about all the paths from "http://feed.opendata.imet.gr:23577/itravel/paths.json"
                // Data is in json format
                urls_path=['http://feed.opendata.imet.gr:23577/itravel/paths.json'];

                console.log("Results are loading...")
                
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

                // Get duration of above paths from "http://feed.opendata.imet.gr:23577/itravel/traveltimes.json"
                // Data is in json format
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

                // Save path duration for each path id (durations are not available for some path ids)
                var duration = JSON.parse(result_duration[0]);
                var len = duration.length;
                
                path_id_duration = new Array(229);
                for (var i=0; i < len; i++) {
                    path_id_duration[duration[i].Path_id] = duration[i].Duration
                }

                // Get destination device names from "http://feed.opendata.imet.gr:23577/itravel/devices.json"
                // Data is in json format
                urls_devices = ['http://feed.opendata.imet.gr:23577/itravel/devices.json'];
                for(var i=0; i<urls_devices.length; i++){
                    var device = [urls_devices[i]];
                    var result_device = await Promise.all(device.map((url) => {
                        return request({
                            url,
                            method: 'GET'
                        }); 
                    }));
                }

                // Save device name and device coords for each device id
                var device = JSON.parse(result_device[0]);
                var len = device.length;
                path_device = new Array();
                device_lat = new Array();
                device_lon = new Array();

                for (var i=0; i < len; i++) {
                    path_device[device[i].device_id] = device[i].device_Name;
                    device_lat[device[i].device_id] = device[i].lat;
                    device_lon[device[i].device_id] = device[i].lon;
                    
                }
                
                // Get weather for each origin device id
                // Coordinates of device are used when calling the API
                // An API key is also used

                var len = path.length;
                weather_urls = new Array ();
                    for(i=0; i<len; i++){
                        var weather_url = `http://api.openweathermap.org/data/2.5/weather?lat=${device_lat[path[i].Path_origin_device_id]}&lon=${device_lon[path[i].Path_origin_device_id]}&APPID=6706f94674531cd9018221139b9fe25f`;
                        weather_urls[i] = weather_url;
                    }

                weather = new Array();
                result = new Array();

                for(var i=0; i<len; i++){
                    var weather = [weather_urls[i]];
                    var result_weather = await Promise.all(weather.map((url) => {
                        return request({
                            url,
                            method: 'GET'
                        }); 
                    }));  
                    result.push(result_weather);
                }

                // Save weather_id, temperature and felt temperature for each path origin device
                weather_id = new Array();
                temperature = new Array();
                feels_like = new Array();

                // Save icon id for each path origin device
                icon = new Array();

                // Save values of i for which there is no rain in the corresponding device coordinates 
                not_raining = new Array();

                for(i=0; i<len; i++){
                    weather = JSON.parse(result[i])
                    var tmp = weather.weather;
                    
                    weather_id[path[i].Path_origin_device_id] = tmp[0].id;
                    console.log(path[i].Path_origin_device_id + " i: " + i);

                    console.log(typeof(weather_id[path[i].Path_origin_device_id]));
                    if(weather_id[path[i].Path_origin_device_id]>=800){
                        temperature[path[i].Path_origin_device_id] = weather.main.temp-273.15; // convert kelvin to celsius
                        
                        //round to 2 decimal numbers
                        temperature[path[i].Path_origin_device_id] = (Math.round(temperature[path[i].Path_origin_device_id] * 100) / 100).toFixed(2);
                        
                        feels_like[path[i].Path_origin_device_id] = weather.main.feels_like-273.15; //convert kelvin to celsius
                        
                        //round to 2 decimal numbers
                        feels_like[path[i].Path_origin_device_id] = (Math.round(feels_like[path[i].Path_origin_device_id] * 100) / 100).toFixed(2);
                        
                        icon[path[i].Path_origin_device_id] = tmp[0].icon;
                        not_raining.push(i);
                    }
                }
                console.log("NOT RAINING " + not_raining);

                final_result = new Array();
                function create_result(j){
                    console.log(path[j].Path_id + " j: " + j + " " + weather_id[path[j].Path_origin_device_id]);
                    if(path_id_duration[path[j].Path_id]!=null){
                        final_result.push({"Path_id": path[j].Path_id , "Path_name": path[j].Path_Name, "Device_dest":path[j].Path_destination_device_id, "Device_name": path_device[path[j].Path_destination_device_id], "Temperature": temperature[path[j].Path_origin_device_id],
                        "Feels_like": feels_like[path[j].Path_origin_device_id], "Duration":path_id_duration[path[j].Path_id], "icon": icon[path[j].Path_origin_device_id] });
                        }else{
                        final_result.push({"Path_id": path[j].Path_id, "Path_name": path[j].Path_Name, "Device_dest":path[j].Path_destination_device_id, "Device_name": path_device[path[j].Path_destination_device_id],  "Temperature": temperature[path[j].Path_origin_device_id],
                        "Feels_like": feels_like[path[j].Path_origin_device_id], "Duration":"We couldn't find the duration of the path", "icon": icon[path[j].Path_origin_device_id]}); 
                        
                    }
                }
                not_raining.forEach(create_result);
               res.send(final_result); 
            }catch(e) {
                console.log(e.message);
            }
                
        })();
});  

module.exports=router;

