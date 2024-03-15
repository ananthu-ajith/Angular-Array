import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-array';

  students: Student[] = [
    new Student("Akash", 20, "Computer Engineering", 88),
    new Student("Chandu", 21, "Electrical Engineering", 58),
    new Student("David", 24, "Mechanical Engineering", 62),
    new Student("Beena", 23, "Civil Engineering", 96)
  ];


  selectedField: string = 'name';
  searchTerm: string = '';
  minMarks: number = 0;

  sortStudents() {
    this.students.sort((a, b) => {
      if (a[this.selectedField] < b[this.selectedField]) {
        return -1;
      }
      if (a[this.selectedField] > b[this.selectedField]) {
        return 1;
      }
      return 0;
    });
  }


  filterStudents() {


    if(isNaN(parseInt(this.searchTerm)))
    
{
    this.students = this.students.filter(student => {
      const searchString = this.searchTerm;
      return student.name.toLowerCase().includes(searchString) ||
             student.department.toLowerCase().includes(searchString);
    });
  }
    

    else
    {
    this.students = this.students.filter(student => {
       const searchString = this.searchTerm;
       return student.age==parseInt(searchString) ||
              student.totalMarks==parseInt(searchString);
    }
     );
  }
    


    
  }

  filterStudentsByMarks() {

    
    const minMarksNumber = parseFloat(this.minMarks.toString());
    console.log(minMarksNumber);
    
    if (typeof minMarksNumber === 'number') 
  {
    if (isNaN(minMarksNumber) || minMarksNumber <= 0) {
      this.resetStudents();
      return;
    }
  
    this.students = this.students.filter(student => student.totalMarks > minMarksNumber);
  }
  
  
  }
  
  resetStudents() {
    this.students = [
      new Student("Akash", 20, "Computer Engineering", 88),
    new Student("Chandu", 21, "Electrical Engineering", 58),
    new Student("David", 24, "Mechanical Engineering", 62),
    new Student("Beena", 23, "Civil Engineering", 96)
    ];
  }

}
class Student {
  [key: string]: any;
  constructor(
    public name: string,
    public age: number,
    public department: string,
    public totalMarks: number
  ) {}
}