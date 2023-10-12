var Body = {
    SetColor: function(color){
      document.querySelector('body').style.color = color;},
    SetBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor = color;}
  }
  var Links = {
      SetColor: function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
      alist[i].style.color = 'pink';
      i = i + 1;
      }}
  }
  
  function nightDayHandler(self){
      var target = document.querySelector('body');

  if(self.value === '야간모드'){
      Body.SetBackgroundColor('black');
      Body.SetColor('white') 
      self.value = '주간모드';
      Links.SetColor('pink');
  }

  else{Body.SetBackgroundColor('white');
      Body.SetColor('black'); 
      self.value = '야간모드';
      Links.SetColor('pink');
  }
  }