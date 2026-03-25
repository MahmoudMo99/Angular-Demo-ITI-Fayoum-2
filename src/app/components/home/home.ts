import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string = 'Hello in Day 2 - Angular - 2';

  userName: string = '';

  // name: string = 'Mahmoud Mohamed';
  // age: number = 24;
  // isActive: boolean = true;

  img: string = 'images/iti.png';
  imag2: string = 'images/profile.avif';
  imgSrc = this.img;

  altImage: string = 'iti logo';

  inputType: string = 'text';
  inputPlaceholder: string = ' Enter Your Name...';

  showImage: boolean = true;

  user = {
    name: 'Mahmoud Mohamed',
    age: 24,
    isActive: true,
    image: 'images/profile.avif',
  };

  userLog() {
    console.log(`My Name is : ${this.user.name} `);
  }

  changeTitle() {
    this.title = 'Data Binding in Angular';
  }

  changeImage() {
    this.img = 'images/profile.avif';
  }

  toggleImage() {
    this.imgSrc = this.imgSrc === this.img ? this.imag2 : this.img;
  }

  displayUserName() {
    console.log(this.userName);
  }

  hideImage() {
    this.showImage = false;
  }

  // toggleImageShow() {
  //   if (this.showImage) {
  //     this.showImage = false;
  //   } else {
  //     this.showImage = true;
  //   }
  // }

  toggleImageShow() {
    this.showImage = !this.showImage;
  }
}
