export class Student{
    constructor(university, course, fullName){
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marksArr = [5, 4, 5, 2];
      this.isDismiss = false;
    }
    getInfo(){
      return `Student ${this.course} of course ${this.university} ${this.fullName}`;
    }
    get marks(){
      if(this.isDismiss){return null;}
      return this.marksArr;
    }
    set marks(mark){
      if(this.isDismiss){return null;}
      this.marksArr.push(mark);
    }
    getAverageMark(){
      if(this.isDismiss){return null;}
      return Number((this.marksArr.reduce(function(a,b){return a+b;})/this.marksArr.length).toFixed(2));
    }
    dismissStudent(){
      return this.isDismiss = true;
    }
    recoverStudent(){
      return this.isDismiss = false;
    }
  }
 export const ostapBender = new Student('Студент 1го курса', 'Высшей Школы Мошенничества г.Одесса', 'Остап Родоманський Бендер');
console.log(ostapBender.getInfo());