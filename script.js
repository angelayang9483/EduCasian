// this is for the map
var map1 = new Map();

map1.set("China", ['Peking Duck', 'Great Wall']);
map1.set("Taiwan", ['Bubble Tea', 'Taipei 101']);
map1.set("India", ['Khichd', 'Taj Mahal']);
map1.set("Indonesia", ['Nasi Goreng', 'Komodo National Park']);
map1.set("Pakistan", ['Pakistani Nihari', 'Shalimar Gardens']);
map1.set("Bangladesh", ['Ilish', 'Lalbagh Fort']);
map1.set("Japan", ['Curry-Rice', 'Mt. Fuji']);
map1.set("Philippines", ['Adobo', 'Chocolate Hills']);
map1.set("Vietnam", ['Pho', 'Halong Bay']);
map1.set("Turkey", ['Döner Kebap', 'Cappadocia']);
map1.set("Iran", ['Ghormeh Sabzi', 'Shah Mosque']);
map1.set("Thailand", ['Pad Thai', 'The Grand Palace']);
map1.set("Myanmar", ['Mohinga', 'Shwedagon Pagoda']);
map1.set("Sourth Korea", ['Kimchi', 'N Seoul Tower']);
map1.set("Iraq", ['Masgouf', 'Abbasid Palace']);
map1.set("Afghanistan", ['Kabuli Palaw', 'The Blue Mosque']);
map1.set("Saudi Arabia", ['Kabsa', 'Kingdom Centre Tower']);
map1.set("Uzbekistan", ['Pilaf', 'Metro Taschkent']);
map1.set("Malaysia", ['Nasi Lemak', 'Batu Caves']);
map1.set("Yemen", ["Saltah", "Old City of Sana'a"]);
map1.set("Nepal", ['Momo', 'Boudhanath Stupa']);
map1.set("North Korea", ['Kimchi', 'Kim Il Sung Square']);
map1.set("Turkey", ['Döner', 'Cappadocia']);
map1.set("Sri Lanka", ['Kottu Roti', 'Pidurangala Rock']);
map1.set("Kazakhstan", ['Beshbarmak', 'Big Almaty Lake']);
map1.set("Syria", ['Kibbeh Bil Sanieh', 'Damascus Umayyad Mosque']);
map1.set("Cambodia", ['Samlor Korko', 'Angkor Wat']);
map1.set("Jordan", ['Mansaf', 'Petra']);
map1.set("Azerbaijan", ['Plov', 'Baku Old City']);
map1.set("United Arab Emirates", ['Kabsa', 'Burj Khalifa']);
map1.set("Tajikistan", ['Plov', 'National Library of Tajikistan']);
map1.set("Israel", ['Falafel', 'Dead Sea']);
map1.set("Laos", ['Larb Ped', 'Kuang Si Falls']);
map1.set("Lebanon", ['Kibbeh', 'Zaitunay Bay']);
map1.set("Kyrgyzstan", ['Beshbarmak', 'Ala Archa National Park']);
map1.set("Turkmenistan", ['Plov', 'Monument of Neutrality']);
map1.set("Singapore", ['Hainese Chicken Rice', 'Marina Bay Sands']);
map1.set("Oman", ['Shuwa', 'Sultan Qaboos Grand Mosque']);
map1.set("State of Palestine", ['Kanafeh', "Hisham's Palace"]);
map1.set("Kuwait", ['Machboos', 'The Grand Mosque of Kuwait']);
map1.set("Georgia", ['Khachapuri', 'Narikala Fortress']);
map1.set("Mongolia", ['Buuz', 'Gorkhi-Terelj National Park']);
map1.set("Armenia", ['Harissa', 'Cafesijan Center for the Arts']);
map1.set("Qatar", ['Machboos', 'Museum of Islamic Art']);
map1.set("Bahrain", ['Machboos', 'Al-Fatih Mosque']);
map1.set("Timor-Leste", ['Ikan Pepes', 'Cristo Rei']);
map1.set("Cyprus", ['Fasolada', 'Paphos']);
map1.set("Bhutan", ['Ema Datshi', 'Paro Taktsang']);
map1.set("Maldives", ['Gulha', 'Tsunami Monument']);
map1.set("Brunei", ['Ambuyat', 'Sultan Omar Ali Saifuddin Mosque']);
map1.set("Russia", ['Pelmeni', "St. Basil's Cathedral"]);



$(document).ready(function () {

  $("#Russia").click(function(){
      onEnter('Russia');
  });
  $("#Brunei").click(function(){
      onEnter('Brunei');
  });
  $("#Maldives").click(function(){
      onEnter('Maldives');
  });
  $("#Bhutan").click(function(){
      onEnter('Bhutan');
  });
  $("#Cyprus").click(function(){
      onEnter('Cyprus');
  });
  $("#Timor-Leste").click(function(){
      onEnter('Timor-Leste');
  });
  $("#Bahrain").click(function(){
      onEnter('Bahrain');
  });
  $("#Qatar").click(function(){
      onEnter('Qatar');
  });
  $("#Armenia").click(function(){
      onEnter('Armenia');
  });
  $("#Mongolia").click(function(){
      onEnter('Mongolia');
  });
  $("#Georgia").click(function(){
      onEnter('Georgia');
  });
  $("#Kuwait").click(function(){
      onEnter('Kuwait');
  });
  $("#State of Palestine").click(function(){
      onEnter('State of Palestine');
  });
  $("#Oman").click(function(){
      onEnter('Oman');
  });
  $("#Singapore").click(function(){
      onEnter('Singapore');
  });
  $("#Turkmenistan").click(function(){
      onEnter('Turkmenistan');
  });
  $("#Kyrgyzstan").click(function(){
      onEnter('Kyrgyzstan');
  });
  $("#Lebanon").click(function(){
      onEnter('Lebanon');
  });
  $("#Laos").click(function(){
      onEnter('Laos');
  });
  $("#Israel").click(function(){
      onEnter('Israel');
  });
  $("#Tajikistan").click(function(){
      onEnter('Tajikistan');
  });
  $("#United Arab Emirates").click(function(){
      onEnter('United Arab Emirates');
  });
  $("#Azerbaijan").click(function(){
      onEnter('Azerbaijan');
  });
  $("#Jordan").click(function(){
      onEnter('Jordan');
  });
  $("#China").click(function(){
      onEnter('China');
  });
    $("#Taiwan").click(function(){
      onEnter('Taiwan');
  });
    $("#India").click(function(){
      onEnter('India');
  });
  $("#Indonesia").click(function(){
      onEnter('Indonesia');
  });
  $("#Pakistan").click(function(){
      onEnter('Pakistan');
  });
  $("#Bangladesh").click(function(){
      onEnter('Bangladesh');
  });
  $("#Japan").click(function(){
      onEnter('Japan');
  });
  $("#Philippines").click(function(){
      onEnter('Philippines');
  });
    $("#Vietnam").click(function(){
      onEnter('Vietnam');
  });
  $("#Turkey").click(function(){
      onEnter('Turkey');
  });
    $("#Iran").click(function(){
      onEnter('Iran');
  });
    $("#Thailand").click(function(){
      onEnter('Thailand');
  });
    $("#Myanmar").click(function(){
      onEnter('Myanmar');
  });
  $("#South Korea").click(function(){
      onEnter('South Korea');
  });
    $("#Iraq").click(function(){
      onEnter('Iraq');
  });
    $("#Afghanistan").click(function(){
      onEnter('Afghanistan');
  });
    $("#Saudi Arabia").click(function(){
      onEnter('Saudi Arabia');
  });
    $("#Uzbekistan").click(function(){
      onEnter('Uzbekistan');
  });
    $("#Malaysia").click(function(){
      onEnter('Malaysia');
  });
    $("#Yemen").click(function(){
      onEnter('Yemen');
  });
    $("#Nepal").click(function(){
      onEnter('Nepal');
  });
    $("#North Korea").click(function(){
      onEnter('North Korea');
  });
    $("#Sri Lanka").click(function(){
      onEnter('Sri Lanka');
  });
    $("#Kazakhstan").click(function(){
      onEnter('Kazakhstan');
  });
    $("#Syria").click(function(){
      onEnter('Syria');
  });
    $("#Cambodia").click(function(){
      onEnter('Cambodia');
  });
  
  
  function onEnter(data) {
      if (map1.has(data)) {
      document.getElementById("dish").innerHTML = (map1.get(data))[0];
      document.getElementById("landmark").innerHTML = (map1.get(data))[1];

    }
  }
  
  // $('#China').click(function(){ onEnter(this); });
  //   function onEnter(obj) {
  //     alert($(obj).attr("id"));
  // }
    // var data = $(this).data('info')
    // if (map1.has(data)) {
    //   document.getElementById("dish").innerHTML = (map1.get(data))[0]
    //   document.getElementById("landmark").innerHTML = (map1.get(data))[1]
    // }
  // });

  // jQuery('path').each(function() {
  //   jQuery(this).click(function() {
  //     var data = (jQuery(this).attr('id')).getAttribute('data-info')
  //     if (map1.has(data)) {
  //       document.getElementById("dish").innerHTML = (map1.get(data))[0]
  //       document.getElementById("landmark").innerHTML = (map1.get(data))[1]
  //   }
  //   });                       
  // });

  $("path, circle").hover(function() {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path, circle").mouseleave(function() {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
});
//ths is popups?????????

