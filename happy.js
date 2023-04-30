
var myArray = ["https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/339040699_615547303431406_3261499140847940718_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=p1Ygoad_MBEAX_UB-jm&_nc_ht=scontent.ftun15-1.fna&oh=03_AdS9AbL5YmQ2MQ98orsCg8POw9Eqi2owZizATIMRuBQGTw&oe=645C6C53",
    "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/339013266_915246553028191_8110261573142979235_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GjXq7l8J10sAX8fDE-i&_nc_ht=scontent.ftun15-1.fna&oh=03_AdSAET8l3jgaxgSMdEmT7CT0PYgXdV3xtAbbHnNXo1KT9w&oe=645C72EE",
      "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/339134955_3015392232090807_4512432932166476209_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=9DaNwZjtOvkAX9xKxGl&_nc_ht=scontent.ftun15-1.fna&oh=03_AdQFrRtRg671hhtoHyvSST-PowOdjhYyImMHYp4MFZlP-w&oe=645C6EFE",
       "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/338541170_1324453648413963_5711616861600702682_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cX4hy8aMa_sAX_Q_PsG&_nc_ht=scontent.ftun15-1.fna&oh=03_AdTYqSoOwhPlza5pgxOqVwnL4-WCsfqVgDKpB0Z1zmEnng&oe=645C4215",
        "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/339246276_221599463793476_8366426652237504159_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=iNLvabfYZ8UAX9RgXr6&_nc_ht=scontent.ftun15-1.fna&oh=03_AdQunLa6wvXp4xrTo32ylOviLl6RV43emiU9jJ3R_Uc2Rg&oe=645C7971",
         "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/339659653_1683159002124211_746086285245166363_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wWkN__MR6eMAX9DH8nC&_nc_ht=scontent.ftun15-1.fna&oh=03_AdQLrkJrH2_BXEykMWHXl4vANqoAyhNmZPDDDW9M3JCzDA&oe=645C77F1",
          "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/339407424_169197852707801_3155165717757681857_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jUvMqGplHCYAX_skTDc&_nc_ht=scontent.ftun15-1.fna&oh=03_AdS9Dzs2w-161YTNkCq3-9bDhCPe4l_QryXk35UL8dNpTQ&oe=645C4D08",
           "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/338563217_138098945877984_6302057893582448154_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=bjxzMcBg4nMAX-bI0fn&_nc_ht=scontent.ftun15-1.fna&oh=03_AdQPMp6WnPeeNMYEXFhselNVHSVCHqYxq3xW2OVHJvqxOg&oe=645C6BB3",
            "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/338639735_664297182170892_564175999513875515_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=arIyq9lLB7EAX-qgOvw&_nc_ht=scontent.ftun15-1.fna&oh=03_AdTiklb_G9hg7JNJmAqAwLIVr4O2oNzO6WTHYebwpCZPcA&oe=645C65CD",
              "https://scontent.xx.fbcdn.net/v/t1.15752-9/338580569_1437476103658722_7627250183529805373_n.png?stp=dst-png_s240x240&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=kCfl4L62GesAX-6ZF65&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTVoZHvo6GrDvV0UsXSZntSlR-Oenl_letmAV6ILROrzg&oe=645E5314"];
var counter = 0;
function clickImage(){
  var image = document.getElementById("dirty");
  image.src = myArray[counter];
  counter++; 
  if (counter >=myArray.length) { counter = 0}}
  
    

  
