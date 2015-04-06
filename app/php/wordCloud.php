<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input");
$ojbData = json_decode($data);
@$searchQuery = $ojbData->scholar;
#$searchQuery = "java";

$scholarRequest = "http://ieeexplore.ieee.org/gateway/ipsSearch.jsp?querytext=(java OR C++)";


//List of some stop words - not FINAL
$stopwords = "after,afterwards,again,against,ain't,all,allow,allows,almost,alone,along,already,also,although,always,am,among,amongst,an,and,another,any,anybody,anyhow,anyone,anything,anyway,anyways,anywhere,apart,appear,appreciate,appropriate,are,aren't,around,as,aside,ask,asking,associated,at,available,away,awfully,be,became,because,become,becomes,becoming,been,before,beforehand,behind,being,believe,below,beside,besides,best,better,between,beyond,both,brief,but,by,c'mon,c's,came,can,can't,cannot,cant,cause,causes,certain,certainly,changes,clearly,co,com,come,comes,concerning,consequently,consider,considering,contain,containing,contains,corresponding,could,couldn't,course,currently,definitely,described,despite,did,didn't,different,do,does,doesn't,doing,don't,done,down,downwards,during,each,edu,eg,eight,either,else,elsewhere,enough,entirely,especially,et,etc,even,ever,every,everybody,everyone,everything,everywhere,ex,exactly,example,except,far,few,fifth,first,five,followed,following,follows,for,former,formerly,forth,four,from,further,furthermore,get,gets,getting,given,gives,go,goes,going,gone,got,gotten,greetings,had,hadn't,happens,hardly,has,hasn't,have,haven't,having,he,he's,hello,help,hence,her,here,here's,hereafter,hereby,herein,hereupon,hers,herself,hi,him,himself,his,hither,hopefully,how,howbeit,however,i'd,i'll,i'm,i've,ie,if,ignored,immediate,in,inasmuch,inc,indeed,indicate,indicated,indicates,inner,insofar,instead,into,inward,is,isn't,it,it'd,it'll,it's,its,itself,just,keep,keeps,kept,know,knows,known,last,lately,later,latter,latterly,least,less,lest,let,let's,like,liked,likely,little,look,looking,looks,ltd,mainly,many,may,maybe,me,mean,meanwhile,merely,might,more,moreover,most,mostly,much,must,my,myself,name,namely,nd,near,nearly,necessary,need,needs,neither,never,nevertheless,new,next,nine,no,nobody,non,none,noone,nor,normally,not,nothing,novel,now,nowhere,obviously,of,off,often,oh,ok,okay,old,on,once,one,ones,only,onto,or,other,others,otherwise,ought,our,ours,ourselves,out,outside,over,overall,own,particular,particularly,per,perhaps,placed,please,plus,possible,presumably,probably,provides,que,quite,qv,rather,rd,re,really,reasonably,regarding,regardless,regards,relatively,respectively,right,said,same,saw,say,saying,says,second,secondly,see,seeing,seem,seemed,seeming,seems,seen,self,selves,sensible,sent,serious,seriously,seven,several,shall,she,should,shouldn't,since,six,so,some,somebody,somehow,someone,something,sometime,sometimes,somewhat,somewhere,soon,sorry,specified,specify,specifying,still,sub,such,sup,sure,t's,take,taken,tell,tends,th,than,thank,thanks,thanx,that,that's,thats,the,their,theirs,them,themselves,then,thence,there,there's,thereafter,thereby,therefore,therein,theres,thereupon,these,they,they'd,they'll,they're,they've,think,third,this,thorough,thoroughly,those,though,three,through,throughout,thru,thus,to,together,too,took,toward,towards,tried,tries,truly,try,trying,twice,two,un,under,unfortunately,unless,unlikely,until,unto,up,upon,us,use,used,useful,uses,using,usually,value,various,very,via,viz,vs,want,wants,was,wasn't,way,we,we'd,we'll,we're,we've,welcome,well,went,were,weren't,what,what's,whatever,when,whence,whenever,where,where's,whereafter,whereas,whereby,wherein,whereupon,wherever,whether,which,while,whither,who,who's,whoever,whole,whom,whose,why,will,willing,wish,with,within,without,won't,wonder,would,would've,wouldn't,yes,yet,you,you'd,you'll,you're,you've,your,yours,yourself,yourselves,zero,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
$stopwords = explode(",", $stopwords);

//Start of Malvika's function
function ParseXML($xml) {
// create the parser object
if (!($parser = xml_parser_create())) {
    print "cannot create parser!";
    exit();
}
 
// error for no XML
if ($xml == "") {
    print "No XML Was found!";
    exit();
}
 
xml_parse_into_struct($parser, trim($xml), $structure, $index);
xml_parser_free($parser);
 
// put xml in array
$found = "";



foreach($structure as $s)
{
      if ($s["tag"] == "DOCUMENT") {
           $found += $s['value'];
      }
}
//return lyrics
return $found;
}
 //End of Malvika's function

//Filters out stopWords
function stopWordFilter($words, $stopwords){
	foreach($words as $pos => $word){
        if (!in_array(strtolower($word), $stopwords, TRUE)) {
			$wordsFiltered[$pos] = $word;
		}
	}
	return $wordsFiltered;
}
//Counts frequency of words
function wordFreq($words) {
    $frequency_list = array();
    foreach ($words as $pos => $word) {
        $word = strtolower($word);
        if (array_key_exists($word, $frequency_list)) {
            ++$frequency_list[$word];
        }
        else {
            $frequency_list[$word] = 1;
        }
    }
    return $frequency_list;
}

function word_cloud($words) {
   #$returnCloud = array();
	$returnCloud = new stdClass();
	$returnCloud->data = array();    
	$fmax = 120; 
    $fmin = 8; 
    $tmin = min($words); 
    $tmax = max($words); 

    foreach ($words as $word => $frequency) {    
        if ($frequency > $tmin) {
            $font_size = floor(  ( $fmax * ($frequency - $tmin)*5 ) / ( $tmax - $tmin )  );
        }
        else {
            $font_size = 0;
        }
        if ($font_size >= $fmin) {
		$item = array("Word" => $word, "Size" => $font_size);
		$returnCloud->data[] = $item;
           # $returnCloud[$word] =	$font_size;
	    }  
    }

    return $returnCloud;   
}

/*$words = array();
$xmlFiles = array();
for ($i = 0; $i <  1; $i++){
	$songName = $jsonRetrieve["response"]["hits"][$i]["result"]["title"];


$params = array(
      'artist' => $anChartLyrics,
      'song' => $songName,
);
$encoded_params = array();
foreach ($params as $k => $v){
     $encoded_params[] = urlencode($k).'='.urlencode($v);
}
$url = "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?".implode('&', $encoded_params);


 $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$output = false;
        $output = curl_exec($ch);
        curl_close($ch);   
 
//$context = stream_context_create(array('http' => array('header'=>'Connection: close'))); 
//$GetLyricResult = file_get_contents($url, false,$context);
$xmlFiles[] = $output;
}*/

$ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $scholarRequest);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$output = false;
        $output = curl_exec($ch);
        curl_close($ch); 
$whatever = "";


$vname = simplexml_load_file($scholarRequest);

//TODO
for($i = 0; $i < 5; $i++){
$whatever .= " " . $vname->document[$i]->abstract;

}

$words = str_word_count($whatever, 1);



    $word_count = count($words); 

    $unique_words = count( array_unique($words) ); 
    $words_filtered = stopWordFilter($words, $stopwords);
    $word_frequency = wordFreq($words_filtered); 
    $word_c = word_cloud($word_frequency);

 echo json_encode($word_c); 

?>
