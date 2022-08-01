function MakeResponsiveSliders(slider_container,minimal){
  let paddings = {
    left : parseFloat(window.getComputedStyle(slider_container, null).getPropertyValue('padding-left').split('px')[0]) ,
    right : parseFloat(window.getComputedStyle(slider_container, null).getPropertyValue('padding-right').split('px')[0])
  }

  let width = slider_container.offsetWidth - (paddings.left + paddings.right);
  let sliders = slider_container.children[0].children
  let slider_w = sliders[0].offsetWidth
  let max_sliders_veiw = 0


  // get max slides that can viewable inside slider_container
  for(let i=1;i<sliders.length+1;i++){
    let m = minimal.margin*i
    let w = slider_w*i
    if(w+m <width){
          max_sliders_veiw+=1
    }else{
      break;
    }
  }
  
  let s = max_sliders_veiw*slider_w
  let margin_value = (width - s ) / (max_sliders_veiw * 2)

  for(let i=0;i<sliders.length;i++){
      sliders[i].style=`margin-left:${margin_value}px; margin-right:${margin_value}px;`;
  }

  return [margin_value , max_sliders_veiw]
  
}