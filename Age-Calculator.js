  //get access to yearsInput Element
  const yearsEl = document.querySelector('.js-year-input');
  //get access to monthsSelect Element
  const monthsEl = document.querySelector('.js-select-months');
  //get access to daysSelect Element
  const daysEl = document.querySelector('.js-select-day');
  //get access to yearsInputCurrent Element
  const yearsCrntEl = document.querySelector('.js-year-input-current');
  //get access to monthsSelectCurrent Element
  const monthsCrntEl = document.querySelector('.js-select-months-current');
  //get access to daysSelectCurrent Element
  const daysCrntEl = document.querySelector('.js-select-day-current');
  //get access to display result element
  const resultEl = document.querySelector('.js-result');
  //get access to button element
  const btnEl = document.querySelector('.js-button');
  //get access to button clear element
  const btnClearEl = document.querySelector('.js-btn-clear');
  //get access to ageCalculator title
  const ageCalculatorTitle = document.querySelector('.js-title');
  //get access to home text 
  const homeTextEl = document.querySelector('.js-home-text');
  //get acces to  home icon
  const homeIconEl = document.getElementById("home-icon");
  //get access to different varaibles for
  //dark/light mode
  const toggleEl = document.getElementById("toggle-input");
  const headerEl = document.getElementById("js-header");
  const bodyEl = document.getElementById("js-body");
  const homeTooltipEl = document.getElementById("js-tooltip-home");
  const toggleTooltipEl = document.getElementById("js-tooltip-toggle");
  const ageCalculatorEl = document.getElementById("js-age-calculator");

  ageCalculatorTitle.addEventListener('click' , ()=>{
    location.reload();
  })

  homeTextEl.addEventListener('click' , ()=>{
    location.reload();
  })

  homeIconEl.addEventListener('click' , ()=>{
    location.reload();
  })

  //these function run , when the page loades
  displayCurrentDateInDOB();
  displayCurrentDateInCrnt();

  //this event listener runs the function
  //getDaysOption() when the user 
  //selects a month in monthsEl
  monthsEl.addEventListener('input' , getDaysOption);

  //this event listener runs the function
  //getDaysOptionCrnt() when the user 
  //selects a month in monthsCrntEl
  monthsCrntEl.addEventListener('input' ,getDaysOptionCrnt)

  //this event listener runs the function
  //getDaysFeb() when the user
  //inputs any year in yearsEl
  yearsEl.addEventListener('input', getDaysFeb);

  //this event listener runs the function
  //getDaysFebCrnt() when the user
  //inputs any year in yearsCrntEl
  yearsCrntEl.addEventListener('input', getDaysFebCrnt);

  //run calculateAge function when user 
  //clicks on button
  btnEl.addEventListener('click', (event)=>{
    event.preventDefault();
    calculateAge();
  });

  //return everything back to default on
  //clicking clear button
  btnClearEl.addEventListener('click' , ()=>{
  resultEl.innerHTML = '';
  displayCurrentDateInCrnt();
  displayCurrentDateInDOB();
  })

  //this function displays the current 
  //year , month and day 
  //in dob elements
  function displayCurrentDateInDOB(){
  // Set default values for year, month, and day
  const currentDate = new Date();
  yearsEl.value = currentDate.getFullYear().toString();
  monthsEl.value = (currentDate.getMonth() + 1);
  getDaysOption();
  const currentDay = currentDate.getDate();
  daysEl.value = currentDay;
  }

  //this function displays the current 
  //year , month and day 
  //in current  elements
  function displayCurrentDateInCrnt(){
  //set default values for years , months and days
  //current elements...
  const currentDate = new Date();
  yearsCrntEl.value = currentDate.getFullYear().toString();
  monthsCrntEl.value = (currentDate.getMonth() + 1);
  getDaysOptionCrnt();
  const currentDay = currentDate.getDate();
  daysCrntEl.value = currentDay;
  }

  //this function displays days in
  //daysEl in accordance with the
  //month in monthsEl
  function getDaysOption() {

    //save the day that is being 
    //displayed initialy in 
    //the daysEl!
    const saveSelectedDay = daysEl.value;

    //empty days in daysEl if any!
    daysEl.innerHTML = '';

    //get access to the month that the
    //user selected in monthsEl
    const selectedMonth = monthsEl.value;
    
    //get access to the year
    //in yearsEl
    const selectedYear = yearsEl.value;

    //get access to the last day in
    //the month that the user 
    //selected
    const lastDayOfMonth = new Date(selectedYear,selectedMonth , 0).getDate();

    //loop through the number of
    //days in the month selected by the user
    //and display that exact number of
    //options in daysEl
    for (let i = 1; i <= lastDayOfMonth; i++) {
        const option = document.createElement('option');
        option.text = i;
        daysEl.appendChild(option);
    }

    //run this function to display the 
    //the day that was being displayed 
    //intitialy , but this time in a different month
    //ie : the month that the user selected 
    saveDay(saveSelectedDay,lastDayOfMonth,daysEl);
  }

  //this function displays days in
  //daysCrntEl in accordance with the
  //month in monthsCrntEl
  function getDaysOptionCrnt(){

    //save the day that is being 
    //displayed initialy in 
    //the daysCrntEl!
    const saveSelectedDay = daysCrntEl.value;
    
    //empty days in daysCrntEl if any!
    daysCrntEl.innerHTML = '';

    //get access to the month
    //the user selected in monthsCrntEl
    const selectedMonth = monthsCrntEl.value;

    //get access to the year
    //in yearsCrntEl
    const selectedYear = yearsCrntEl.value;

    //get access to the last day
    //in the month that the user
    //selected
    const lastDayOfMonth = new Date(selectedYear,selectedMonth , 0).getDate();

    //loop through the number of
    //days in the month selected by the user
    //and display that exact number of
    //options in daysCrntEl
    for (let i = 1; i <= lastDayOfMonth; i++) {
        const option = document.createElement('option');
        option.text = i;
        daysCrntEl.appendChild(option);
    }

    //run this function to display the 
    //the day that was being displayed 
    //intitialy , but this time in a different month
    //ie : the month that the user selected 
    saveDayCurrent(saveSelectedDay,lastDayOfMonth,daysCrntEl);

  }

  //this function displays
  //days when the user clicks
  //the month 'February' in monthsEl
  //in accordance with the year in
  //yearsEl
  //remember that this function runs
  //only when the user tries to alter/change
  //the current year in yearsEl!

  function getDaysFeb(){
    //if selected month is not february
    //the function stops! else it continues
    if (monthsEl.value !== '2'){
      return;
    }

    //save the day that is being 
    //displayed initialy in 
    //the daysEl!
    const saveSelectedDay = daysEl.value;

      //empty days in daysEl if any!
      daysEl.innerHTML = '';

      //convert the year in yearsEl into a digit
      //to use it for calculations
      const yearDigit =  parseInt(yearsEl.value);

      //get access to the last day of the month
      //depending on whether the 
      //year(that the user entered) is a
      //leap year or not!
      const lastDayOfMonth =  (yearDigit % 4 === 0 && yearDigit % 100 !== 0) || (yearDigit % 400 === 0)? 29 : 28; 
      
    //loop through the number of
    //days in the month selected by the user
    //and display that exact number of
    //options in daysEl
      for (let i =1 ; i <= lastDayOfMonth ; i++){
        const option = document.createElement('option');
        option.text = i;
        daysEl.appendChild(option);
      }
    
    //run this function to display the 
    //the day that was being displayed 
    //intitialy , but this time in a different month
    //ie : the month that the user selected   
    saveDay(saveSelectedDay,lastDayOfMonth,daysEl);
        
  }

  //this function displays
  //days when the user clicks
  //the month 'February' in monthsCrntEl
  //in accordance with the year in
  //yearsCrntEl
  //remember that this function runs
  //only when the user tries to alter/change
  //the current year in yearsCrntEl!

  function getDaysFebCrnt(){

    //if selected month is not february
    //the function stops! else it continues
    if (monthsCrntEl.value !== '2'){
      return ;
    }

    //save the day that is being 
    //displayed initialy in 
    //the daysCrntEl!
    const saveSelectedDay = daysCrntEl.value;

    //empty days in daysCrntEl if any!
    daysCrntEl.innerHTML = '';

    //get access to the last day of the month
    //depending on whether the 
    //year(that the user entered) is a
    //leap year or not!
    const yearDigit = parseInt(yearsCrntEl.value);

      //get access to the last day of the month
      //depending on whether the 
      //year(that the user entered) is a
      //leap year or not!
    const lastDayOfMonth =  (yearDigit % 4 === 0 && yearDigit % 100 !== 0) || (yearDigit % 400 === 0)? 29 : 28; 

    //loop through the number of
    //days in the month selected by the user
    //and display that exact number of
    //options in daysEl
    for (let i =1 ; i <=lastDayOfMonth ; i++){
        const option = document.createElement('option');
        option.text = i;
        daysCrntEl.appendChild(option);
    } 

    //run this function to display the 
    //the day that was being displayed 
    //intitialy , but this time in a different month
    //ie : the month that the user selected   
    saveDayCurrent(saveSelectedDay,lastDayOfMonth,daysCrntEl);
  }

  //this function displays the 
  //saveDay(the day intially being displayed)
  //in daysEl
  function saveDay(saveSelectedDay,lastDayOfMonth,daysEl){
    if (saveSelectedDay > lastDayOfMonth){
      daysEl.value = lastDayOfMonth;
    }else if(saveSelectedDay <= lastDayOfMonth){
      daysEl.value = saveSelectedDay;
    }
  }

  //this function displays the 
  //saveDay(the day intially being displayed)
  //in daysCrntEl
  function saveDayCurrent(saveSelectedDay,lastDayOfMonth,daysCrntEl){
    if (saveSelectedDay > lastDayOfMonth){
      daysCrntEl.value = lastDayOfMonth;
    }else if(saveSelectedDay <= lastDayOfMonth){
      daysCrntEl.value = saveSelectedDay;
    }
  }

  //this function calculates age of user
  //according to the given dob!
  function calculateAge(){
    //when clicking
    //calculate button
    //return everything back to 
    //default values
    resultEl.innerHTML = '';

    //get access to dob year , month and day!
    const yearValue = yearsEl.value; 
    const monthValue = monthsEl.value;
    const dayValue = daysEl.value;

    const yearValueCrnt = yearsCrntEl.value;
    const monthValueCrnt = monthsCrntEl.value;
    const daysValueCrnt = daysCrntEl.value;

    //convert the string into a date object!
    //this will be the user date of birth!
    const dob = new Date(`${yearValue}-${monthValue}-${dayValue}`);

    //get access to the current date
    const currentDate = new Date(`${yearValueCrnt}-${monthValueCrnt}-${daysValueCrnt}`);

    //get access to years/months/days
    //this can be done by calculating the difference
    //b/w current and birth years/months/days
    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    //display alert 
    //when dob is greater than
    //current date
    if (currentDate < dob) {

    resultEl.innerHTML = 
    `
    <div class="result-container">
        <div class="error-text">
          Error:
          Date of birth needs to be earlier than the current date!!
        </div>
    </div>    
    `;
    //return the entered values
    //in both dob and current 
    //back and display
    //the current date in both of
    //them(dob & current date)again!
    displayCurrentDateInDOB();
    displayCurrentDateInCrnt();
    return;
    }else {

    //years are not 0 , months are 0 and days are negative
    if (years !== 0 && months === 0 && days < 0) 
    {
      months--;
      years--;
      months = 12 + months;
      const daysInBirthMonth  = new Date(dob.getFullYear() , dob.getMonth() + 1 , 0).getDate();
      days =daysInBirthMonth + days; 
    }
    //years are not 0 , months are positive and days are negative
    else if (years !==0 && months > 0 && days < 0)
    {
      months --;
      const daysInBirthMonth  = new Date(dob.getFullYear() , dob.getMonth() + 1 , 0).getDate();
      days =daysInBirthMonth + days; 
    }
    //years are not 0 , months are negative and days are negative
    else if (years !==0 && months < 0  && days < 0)
    {
      months --;
      years--;
      months = 12 + months;

    
        if (dob.getMonth() === 1){
          days = 31 + days;
        }else{
          const daysInBirthMonth  = new Date(dob.getFullYear() , dob.getMonth() + 1 , 0).getDate();

          days =daysInBirthMonth + days; 
        }
    }
    //years are 0 , months are positive and days are negative
    else if (years === 0 && months > 0 && days < 0)
    {
      
      months--;
      const daysInBirthMonth  = new Date(dob.getFullYear() , dob.getMonth() + 1 , 0).getDate();

    days =daysInBirthMonth + days; 
    }

    //months are negative
    if (months < 0){
    years--;
    months = 12 + months;
    }


  //convert the age in Y,M and D to M and D 
    const yearsToMonths = years * 12;
    
    const yearsAndMonths = yearsToMonths + months;

    //Calculate the difference b/w 
    //current date and dob
    //in milliseconds
    const timeDifference = currentDate - dob;

    // Calculate the number of milliseconds in a day
    const millisecondsInDay = 24 * 60 * 60 * 1000;

    // Calculate the age in days
    const ageInDays = Math.floor(timeDifference / millisecondsInDay);

    // Calculate the age in weeks and remaining days
    const weeks = Math.floor(ageInDays / 7);
    const remainingDays = ageInDays % 7;

    //convert age in Weeks and remainingDays to Days
    const weeksToDays = weeks * 7;

    const totalDaysOfAge = weeksToDays + remainingDays;

    //convert age in Days to hours
    const totalDaysOfAgeToHours = totalDaysOfAge * 24;

    //convert age in hours to minutes
    const hoursToMinutes = totalDaysOfAgeToHours * 60;

    // Display the result
    resultEl.innerHTML = `
    <div id="js-result-container" class="result-container">

      <div class="age-approx-title">Your age is approximately</div>

      <div class="container-y-m-d">
        <div  class="js-age-display years">
          <div>${years.toLocaleString()}</div>
          <div>${years > 1 ? 'Years' : 'Year'}</div>
        </div>              
        <div class="js-age-display months">
          <div>${months.toLocaleString()}</div>
          <div>${months > 1 ? 'Months' : 'Month'}</div>
        </div>
        <div class="js-age-display days">
          <div>${days.toLocaleString()}</div>
          <div>${days > 1 ? 'Days' : 'Day'}</div>
        </div>      
      </div> 
      
      <div class="or-text">or</div>

      <div class="js-border-bottom container-m-d">
        <div>
          ${yearsAndMonths.toLocaleString()}
          ${yearsAndMonths > 1 ? 'Months' : 'Month'}
        </div>
        <div>and</div>
        <div>
          ${days.toLocaleString()}
          ${days > 1 ? 'Days' : 'Day'}
        </div> 
        <div>or</div> 
      </div>

      <div class="js-border-bottom container-w-d">
        <div>
          ${weeks.toLocaleString()}
          ${weeks > 1 ? 'Weeks' : 'Week'}
        </div>
        <div>and</div>
        <div>
        ${remainingDays.toLocaleString()}
        ${remainingDays > 1 ? 'Days' : 'Day'}
        </div>
        <div>or</div>
      </div>
      
      <div class="js-border-bottom container-d">
        <div>
          ${totalDaysOfAge.toLocaleString()}
          ${totalDaysOfAge > 1 ? 'Days' : 'Day'}
        </div>
        <div>or</div>
      </div>    

      <div class="js-border-bottom container-h">
        <div>
          ${totalDaysOfAgeToHours.toLocaleString()}
          ${totalDaysOfAgeToHours > 1 ? 'Hours' : 'Hour'}
        </div>
        <div>or</div>
      </div>

      <div class="js-border-bottom container-min">
        <div>
          ${hoursToMinutes.toLocaleString()}
          ${hoursToMinutes > 1 ? 'Minutes' : 'Minute'}
        </div>
      </div>
    
    </div>   
    `;
    }

    //this function access new HTML elements
    //and use them for dark/light mode!
    daynamicElements();      
  }

  function daynamicElements(){

    //get access to elements
    const resultContainerEl = document.getElementById("js-result-container");
    const ageDisplayEls = document.querySelectorAll('.js-age-display');
    const borderEls = document.querySelectorAll('.js-border-bottom');
    //check whether toggle has been checked already! 
    if (toggleEl.checked){
      resultContainerEl.classList.add('dark-result-text');
      resultContainerEl.classList.remove('light-result-text');

      ageDisplayEls.forEach(ageDisplayEl => {
        ageDisplayEl.classList.add('dark-age-calculator');
        ageDisplayEl.classList.remove('light-age-calculator');
        ageDisplayEl.classList.add('transition-elements');
      });

      borderEls.forEach((borderEl)=>{
        borderEl.classList.add('dark-border-bottom');
        borderEl.classList.remove('light-border-bottom');
        borderEl.classList.add('transition-elements');
      })
    }
    //change design(color e.t.c) of elements on toggeling!
    toggleEl.addEventListener('change' , (event)=>{

      const darkMode = event.target.checked;

      resultContainerEl.classList.toggle('dark-result-text' , darkMode);
      resultContainerEl.classList.toggle('light-result-text' , !darkMode);

      ageDisplayEls.forEach(ageDisplayEl => {
        ageDisplayEl.classList.toggle('dark-age-calculator', darkMode);
        ageDisplayEl.classList.toggle('light-age-calculator', !darkMode);
        ageDisplayEl.classList.add('transition-elements');
      });

      borderEls.forEach((borderEl)=>{
        borderEl.classList.toggle('dark-border-bottom' , darkMode);
        borderEl.classList.toggle('light-border-bottom' , !darkMode);
        borderEl.classList.add('transition-elements');
      })
    })
  }

  //change design of elements that 
  //already exsists on page 
  toggleEl.addEventListener('change' , (event)=>{

    const darkMode = event.target.checked;
    //if toggle has been checked
    headerEl.classList.toggle('dark-header' , darkMode);
    bodyEl.classList.toggle('dark-body' , darkMode);
    homeTooltipEl.classList.toggle('dark-tooltip' , darkMode);
    toggleTooltipEl.classList.toggle('dark-tooltip' , darkMode);
    ageCalculatorEl.classList.toggle('dark-age-calculator' , darkMode);
    btnClearEl.classList.toggle('dark-clear-btn' , darkMode);
    //if toggle has not been checked
    headerEl.classList.toggle('light-header' , !darkMode);
    bodyEl.classList.toggle('light-body' , !darkMode);
    homeTooltipEl.classList.toggle('light-tooltip' , !darkMode);
    toggleTooltipEl.classList.toggle('light-tooltip' , !darkMode);
    ageCalculatorEl.classList.toggle('light-age-calculator' , !darkMode);
    btnClearEl.classList.toggle('light-clear-btn' , !darkMode);
    //add transition 0.2s to each element
    [headerEl,bodyEl,homeTooltipEl,toggleTooltipEl,ageCalculatorEl,btnClearEl].forEach((element)=>{
      element.classList.add('transition-elements');
    });
  });

  //body shortcuts
  document.body.addEventListener('keydown',(event)=>{
  if (event.key === 'Enter'){
    calculateAge();
  }
  })