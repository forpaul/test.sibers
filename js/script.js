database = [];
var x;
function take_data(){
    function ajax_get(url, callback) {              
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {         //check status
                try {
                    var data = JSON.parse(xmlhttp.responseText);            //try success
                } catch(err) {  
                    console.log(err.message + " in " + xmlhttp.responseText);   // try error
                    return;
                }
                callback(data);                     
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    ajax_get('http://demo.sibers.com/users', function(data) {    //get data from site and replace old data by new data, if localStorage have data, but if LS dont have data, set new data
        localStorage.removeItem('all_data');
        localStorage.setItem('all_data', JSON.stringify(data)); 
        database = JSON.parse(localStorage.getItem('all_data')); 
        rendering_data();
        slctt();

});
};


function rendering_data(){                                  //generate select by names 
    database = JSON.parse(localStorage.getItem('all_data'));
    $('#names').empty();
    for(key in database){
        $('#names').append($('<option>',
        {   
        id: 'name',
        text : (database[key].name),
        }));
    }
   
}
function slctt(key){                //when clicked on names, this function generate inputs with information about contacts
    $('#inputs').empty();
    x = document.getElementById("names").selectedIndex;     //getting selectedIndex to use in outer function
    array_data = [
        database[key.selectedIndex].avatar,
        database[key.selectedIndex].name,   
        database[key.selectedIndex].username,
        database[key.selectedIndex].email,
        database[key.selectedIndex].address.streetA,
        database[key.selectedIndex].address.streetB,
        database[key.selectedIndex].address.streetC,
        database[key.selectedIndex].address.streetD,
        database[key.selectedIndex].address.city,
        database[key.selectedIndex].address.state,
        database[key.selectedIndex].address.country,
        database[key.selectedIndex].address.zipcode,
        database[key.selectedIndex].address.geo.lat,
        database[key.selectedIndex].address.geo.lng,
        database[key.selectedIndex].phone,
        database[key.selectedIndex].website,
        database[key.selectedIndex].company.name,
        database[key.selectedIndex].company.catchPhrase,
        database[key.selectedIndex].company.bs,
        database[key.selectedIndex].posts[0].words[0],
        database[key.selectedIndex].posts[0].words[1],
        database[key.selectedIndex].posts[0].words[2],
        database[key.selectedIndex].posts[0].sentence,
        database[key.selectedIndex].posts[0].sentences,
        database[key.selectedIndex].posts[0].paragraph,
        database[key.selectedIndex].posts[1].words[0],
        database[key.selectedIndex].posts[1].words[1],
        database[key.selectedIndex].posts[1].words[2],
        database[key.selectedIndex].posts[1].sentence,
        database[key.selectedIndex].posts[1].sentences,
        database[key.selectedIndex].posts[1].paragraph,
        database[key.selectedIndex].posts[2].words[0],
        database[key.selectedIndex].posts[2].words[1],
        database[key.selectedIndex].posts[2].words[2],
        database[key.selectedIndex].posts[2].sentence,
        database[key.selectedIndex].posts[2].sentences,
        database[key.selectedIndex].posts[2].paragraph,
        database[key.selectedIndex].accountHistory[0].amount,
        database[key.selectedIndex].accountHistory[0].date,
        database[key.selectedIndex].accountHistory[0].business,
        database[key.selectedIndex].accountHistory[0].name,
        database[key.selectedIndex].accountHistory[0].type,
        database[key.selectedIndex].accountHistory[0].account,
        database[key.selectedIndex].accountHistory[1].amount,
        database[key.selectedIndex].accountHistory[1].date,
        database[key.selectedIndex].accountHistory[1].business,
        database[key.selectedIndex].accountHistory[1].name,
        database[key.selectedIndex].accountHistory[1].type,
        database[key.selectedIndex].accountHistory[1].account,
        database[key.selectedIndex].accountHistory[2].amount,
        database[key.selectedIndex].accountHistory[2].date,
        database[key.selectedIndex].accountHistory[2].business,
        database[key.selectedIndex].accountHistory[2].name,
        database[key.selectedIndex].accountHistory[2].type,
        database[key.selectedIndex].accountHistory[2].account,
        database[key.selectedIndex].favorite    
    ];

    if (array_data[i] = database[key.selectedIndex].avatar){   //rendering contact's avatar
        $('#inputs').append($('<img>',{
            src: database[key.selectedIndex].avatar,
            alt: 'Avatar',
            id: 'avatar',
            }));
        $('#inputs').append($('<br>',{}));
    }
   

    for(var i=1; i < array_data.length; i++){      //rendering and show information about contact, when clicked on select
        $('#inputs').append($('<input>',{
            id: 'info',
            value : JSON.stringify(array_data[i]),
            size: '70',
        }));        
    }
}
function save(){
    var sv = document.getElementsByTagName('input');  //getting data from inputs to save changes in localStorage
        database[x].name = JSON.parse(sv[0].value);             
        database[x].username = JSON.parse(sv[1].value);
        database[x].email = JSON.parse(sv[2].value);
        database[x].address.streetA = JSON.parse(sv[3].value);
        database[x].address.streetB = JSON.parse(sv[4].value);
        database[x].address.streetC = JSON.parse(sv[5].value);
        database[x].address.streetD = JSON.parse(sv[6].value);
        database[x].address.city = JSON.parse(sv[7].value);
        database[x].address.state = JSON.parse(sv[8].value);
        database[x].address.country = JSON.parse(sv[9].value);
        database[x].address.zipcode = JSON.parse(sv[10].value);
        database[x].address.geo.lat = JSON.parse(sv[11].value);
        database[x].address.geo.lng = JSON.parse(sv[12].value);
        database[x].phone = JSON.parse(sv[13].value);
        database[x].website = JSON.parse(sv[14].value);
        database[x].company.name = JSON.parse(sv[15].value);
        database[x].company.catchPhrase = JSON.parse(sv[16].value);
        database[x].company.bs = JSON.parse(sv[17].value);
        database[x].posts[0].words[0] = JSON.parse(sv[18].value);
        database[x].posts[0].words[1] = JSON.parse(sv[19].value);
        database[x].posts[0].words[2] = JSON.parse(sv[20].value);
        database[x].posts[0].sentence = JSON.parse(sv[21].value);
        database[x].posts[0].sentences = JSON.parse(sv[22].value);
        database[x].posts[0].paragraph = JSON.parse(sv[23].value);
        database[x].posts[1].words[0] = JSON.parse(sv[24].value);
        database[x].posts[1].words[1] = JSON.parse(sv[25].value);
        database[x].posts[1].words[2] = JSON.parse(sv[26].value);
        database[x].posts[1].sentence = JSON.parse(sv[27].value);
        database[x].posts[1].sentences = JSON.parse(sv[28].value);
        database[x].posts[1].paragraph = JSON.parse(sv[29].value);
        database[x].posts[2].words[0] = JSON.parse(sv[30].value);
        database[x].posts[2].words[1] = JSON.parse(sv[31].value);
        database[x].posts[2].words[2] = JSON.parse(sv[32].value);
        database[x].posts[2].sentence = JSON.parse(sv[33].value);
        database[x].posts[2].sentences = JSON.parse(sv[34].value);
        database[x].posts[2].paragraph = JSON.parse(sv[35].value);
        database[x].accountHistory[0].amount = JSON.parse(sv[36].value);
        database[x].accountHistory[0].date = JSON.parse(sv[37].value);
        database[x].accountHistory[0].business = JSON.parse(sv[38].value);
        database[x].accountHistory[0].name = JSON.parse(sv[39].value);
        database[x].accountHistory[0].type = JSON.parse(sv[40].value);
        database[x].accountHistory[0].account = JSON.parse(sv[41].value);
        database[x].accountHistory[1].amount = JSON.parse(sv[42].value);
        database[x].accountHistory[1].date = JSON.parse(sv[43].value);
        database[x].accountHistory[1].business = JSON.parse(sv[44].value);
        database[x].accountHistory[1].name = JSON.parse(sv[45].value);
        database[x].accountHistory[1].type = JSON.parse(sv[46].value);
        database[x].accountHistory[1].account = JSON.parse(sv[47].value);
        database[x].accountHistory[2].amount = JSON.parse(sv[48].value);
        database[x].accountHistory[2].date = JSON.parse(sv[49].value);
        database[x].accountHistory[2].business = JSON.parse(sv[50].value);
        database[x].accountHistory[2].name = JSON.parse(sv[51].value);
        database[x].accountHistory[2].type = JSON.parse(sv[52].value);
        database[x].accountHistory[2].account = JSON.parse(sv[53].value);
        database[x].favorite = JSON.parse(sv[54].value);
    localStorage.setItem('all_data', JSON.stringify(database));         //set data to localStorage
    rendering_data();
    slctt();

}
function sort(){                                //sort names list by alphabit. Buy i have one problem, in time sort this function 
                                                //replace VALUE of inputs, buy dont replace index, and so cant show correct data
    jQuery('#names').each( function(){
        jQuery(this).html(jQuery(this).find('option').sort(function(a, b) {
        return a.value > b.value ? 0 : a.value < b.value ? -1 : 1
        }) );
   
    });
}
