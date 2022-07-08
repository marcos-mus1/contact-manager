import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: IContact[] = [
    {
      id: '123',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'Smith Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '13',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '23',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
    {
      id: '913',
      address: 'Kinshasa',
      email: 'marcos@gmail.com',
      company: 'Zoro innovate',
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFH5K1IjoBBbngXsAaKc7dam_eZPOKstYvy9rSpPWiDS3AZXaVCXjMJw1E3wQfuzy4y8&usqp=CAU',
      fullName: 'John Doe Doe',
      telephone: '0993837363',
      title: 'Software Engineer',
    },
  ];

  dtOptions: DataTables.Settings = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };
  }

  navigateToContactDetails(id: string): void {
    this.router.navigate(['contacts/details/' + id]);
  }
}
