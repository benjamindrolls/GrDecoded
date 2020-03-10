## Mona's notes and issues

### TODO:
Map Api
Github Branches
City API/Parking Data
Hard Code Set Points on Map
Parking Locations
Copyright DestinationGR 

## <font color=#FFA500>UX/UI</font>
_________________________________________

LOGO
Accessibilty
Do we want to take our own pictures for the site
LOGO

[TransitFeeds](https://transitfeeds.com/p/the-rapid/380)  
The OpenMobilityData API allows you to programmatically access information about feeds to make integration into your existing systems easy.

[Public Transit API v3](https://developer.here.com/documentation/transit/dev_guide/topics/coverage-information.html)  
Transit is available in the following cities as part of the HERE Platform licenses available for purchase on this website.  
Note that access to Transit in Paris and Lyon, France requires additional processing. Contact us and we will arrange it.

[Moovit](https://moovitapp.com/index/en/public_transit-line-100-Grand_Rapids_MI-2420-850089-382380-0)  
[Moovit - GR information ](https://moovitapp.com/index/en/public_transit-Grand_Rapids_MI-2420)  
[Moovit API information](https://company.moovit.com/developers/?_ga=2.39785056.2132150788.1583518806-668057172.1583518806)   


## GR data

[On-Street Parking - Two Year](https://data.grandrapidsmi.gov/resource/pitz-92py.json)  

[On-Street Parking Rates](https://data.grandrapidsmi.gov/resource/sndu-g7h2.json)   

[On-Street Parking Zones](https://data.grandrapidsmi.gov/resource/s2v3-jher.json)   

[Fees in cents api](https://data.grandrapidsmi.gov/resource/pitz-92py.json?fee_in_cents=0)  
**To filter the dataset to only return records containing a specified value for fee_in_cents simply add a URL  parameter to your URL with fee_in_cents as the key and your specified value.**   

[paystation parker id](https://data.grandrapidsmi.gov/resource/pitz-92py.json?paystation_or_parker_id=226355654  )   
**To filter the dataset to only return records containing a specified value for paystation_or_parker_id simply  add a URL parameter to your URL with paystation_or_parker_id as the key and your specified value.**  


## Google Maps transit information 

[GTFS Realtime Overview](https://developers.google.com/transit/gtfs-realtime)  

[Data Layer](https://developers.google.com/maps/documentation/javascript/datalayer) 
**The Google Maps Data layer provides a container for arbitrary geospatial data. You can use the Data layer to store your custom data, or to display GeoJSON data on a Google map.** 

[Google Maps will now let users combine transit directions with biking and ride-sharing](https://www.theverge.com/2019/8/27/20835131/google-maps-combine-transit-biking-ride-sharing)
**Google Maps is going multimodal. The navigation app announced the launch of a new feature today that pairs transit directions with biking and ride-sharing options so customers can get directions from point A to point B using a variety of transportation modes.**  

[Google Map  Directions API](https://developers.google.com/maps/documentation/directions/intro)  
**The Directions API is a service that calculates directions between locations using an HTTP request.

This video illustrates the use of the Directions API to help people find their way. The video includes advice on proxying the web service via your server when you're using the API in a mobile app, to protect your API key.**  

[Google Directions Service](https://developers.google.com/maps/documentation/javascript/directions)  
**You can calculate directions (using a variety of methods of transportation) by using the DirectionsService object. This object communicates with the Google Maps API Directions Service which receives direction requests and returns an efficient path. Travel time is the primary factor which is optimized, but other factors such as distance, number of turns and many more may be taken into account. You may either handle these directions results yourself or use the DirectionsRenderer object to render these results.**
