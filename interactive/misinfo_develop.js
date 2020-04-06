import { sentiment_results } from "./resources/sentiment_analysis/sentiment_analysis.js"

function misinfo_display(date) {
	alert(date);
	alert(sentiment_results);
	// tweets = showMisinfoTweets(date);
	// alert(tweets);
	// document.getElementById("misinfo_score_table_recent").innerHTML = tweets;
}

function showMisinfoTweets(date){
  var abc = getMisinfoTweets(date);
	var str = "<table id='table_format' class='table table-bordered table-striped table-hover table-list-search'> \
	<thead> <tr> \
	<th  width='15%'>Website Type <select id='filterText' style='display:inline-block' onchange='filterText()'> \
	<option disabled selected>Select</option> \
	<option value='unreliable'>Unreliable</option> \
	<option value='conspiracy'>Conspiracy</option> \
	<option value='clickbait'>Clickbait</option> \
	<option value='bias'>Political/Biased</option> \
	<option value='all'>All</option> \
	</select> \
	</th> <th>Tweet</th> </tr></thead> \
	<tbody  id='myTable'> \
	"
	var i;
  for (i = 0; i < abc.length; i++) {
				str += "<tr class='content'>";
	      str += "<td>" + abc[i][0] + "</td>";
	      str += "<td>" + abc[i][2]  +"  [" + abc[i][3] + "]" +  "</td>";
				// str += "<td><img src='img/misinfo/cascade_histogram_images_fixed_ylim/cascade_timeseries_" + ".png'" + " class='img-fluid' alt='Responsive image'/></td>"
	      // str += "<td class='mistd' style='text-align:center'>" +   abc[i][1] + "</td></tr>";
				str += "</tr>";
  }
	str += "</tbody> </table>"
  return str;
}


function getMisinfoTweets(date){

	// var path = "./resources/misinformation_analysis/" + date + ".js"
	// import {misinformation_results} from path
	var abc = 'ABC';
	if (date == '2020-03-29'){
		abc = [
			['unreliable', 1.0, 'Rhode Island Public School Teacher Offers to Pay for Someone With Coronavirus to Cough on President Trump https://t.co/KqIS368opR via @gatewaypundit', '2020-03-30T00:14:08', '1244417591554301952'],
		];
	}
	else if (date == '2020-03-28'){
		abc = [
			['unreliable', 1.0, 'Dr. Deborah Birx Says Coronavirus Would Have Killed 1.6 to 2.2 Million Americans if Top Health Officials Did Not Push Lockdown and Ruin US Economy (VIDEO) https://t.co/zmW5QIH0i2 via @gatewaypundit', '2020-03-30T00:14:37', '1244417713184952320'],
	  ];
	}
	else{
		var abc = [];
	}
	return abc;
	// return misinformation_results;
}
