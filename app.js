
 function validate() {
     const inputLocation = document.getElementById("location");
     const inputKey = document.getElementById("access_key");

                if (inputLocation.value!=='' && inputKey.value!=='') {
                    console.log(inputLocation.value);
                    console.log(inputKey.value);
                   

                        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputLocation.value}?unitGroup=metric&key=${inputKey.value}&contentType=json`;
                        console.log(url);

 //this is demo url input given below uncomment it for checking purpose
// const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/India?unitGroup=metric&key=C8XL4ZR7NGRUFTVEM5CDFYVFW&contentType=json';
                    
                      try {        
                            async function getData(url) {

                                    const response = await fetch(url);
                                    areaData = await response.json();
                                    
      
                                    document.getElementsByClassName('txt')[0].innerHTML=`Location : ${(areaData.address)}`;
                                    document.getElementsByClassName('txt')[1].innerHTML=`<pre>Lat : ${areaData.latitude}        Long:${areaData.longitude}</pre>`;
                                    document.getElementsByClassName('txt')[2].innerText=`TimeZone : ${areaData.timezone}`;
                                    document.getElementsByClassName('txt')[3].innerText=`Wind Speed : ${areaData.currentConditions.windspeed}`;
                                    document.getElementsByClassName('txt')[4].innerText=`Pressure : ${areaData.currentConditions.pressure}`;
                                    document.getElementsByClassName('txt')[5].innerText=`Humidity : ${areaData.currentConditions.humidity}`;
                                    document.getElementsByClassName('txt')[6].innerText=`Wind Direction : ${areaData.currentConditions.winddir}`;
                                    document.getElementsByClassName('txt')[7].innerText=`UV Index : ${areaData.currentConditions.solarradiation}`;
                                    document.getElementsByClassName('txt')[8].innerText=`Feels Like : ${areaData.currentConditions.feelslike}`;
                                    document.getElementsByTagName('h3')[0].innerHTML="Weather Api";
                                    document.getElementsByTagName('h3')[0].style.color="#ffffff";
                                };
                        
                     
                                
                     getData(url);
                    }
                     catch (error) {
                             
                            document.getElementsByTagName('h3')[0].innerHTML=`no result found refresh the page for this error:${error}`;
                             
                        }                
                           
                }

        else if(inputLocation.value!=='' && inputKey.value===''){

                    document.getElementsByTagName('h3')[0].innerHTML="Pls... enter the API key";
                    document.getElementsByTagName('h3')[0].style.color="red";
                    
                }

        else if(inputLocation.value==='' && inputKey.value!==''){

                    document.getElementsByTagName('h3')[0].innerHTML="Pls... enter the Location";
                    document.getElementsByTagName('h3')[0].style.color="red";
                }

          else if(inputLocation.value==='' && inputKey.value===''){

                 document.getElementsByTagName('h3')[0].innerHTML="No result found pls refresh the page";
                 document.getElementsByTagName('h3')[0].style.color="red";
                 
                }

 }
