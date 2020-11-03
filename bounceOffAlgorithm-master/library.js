function bounceoff(t1,t2){
    if (t1.x - t2.x < t2.width/2 + t1.width/2
      && t2.x - t1.x < t2.width/2 + t1.width/2) {
    t1.velocityX = t1.velocityX * (-1);
    t2.velocityX = t2.velocityX * (-1);
  }
  if (t1.y - t2.y < t2.height/2 + t1.height/2
    && t2.y - t1.y < t2.height/2 + t1.height/2){
    t1.velocityY = t1.velocityY * (-1);
    t2.velocityY = t2.velocityY * (-1);
  }
  
  }