var email = {
    service: {
      company: 'Microsoft',
      product: 'Outlook'},
    account: {
      firstName: 'Priyam',
      lastName: 'Sarma',
      login:'priyam.sarma',
      email: 'priyam.sarma@outlook.com'},
    domainValues: {
      contactType:['work','friend','family'],
      phoneType:['mobile','home','work'],
      priorty:['High','Medium','Low'],
      status:['Not Started','In Progress','Complete']
    },
    contacts: {
      contact1:
      {
        firstName:'John',
        lastName:'Dodd',
        email: 'john.dodd@gmail.com',
        phone:{'mobile':[6548297676],'home':[],'work':[]},
        contactType:'work'
      }
    },
    Tasks: {
      Task1: {
        priorty: 'Low',
        subject: 'Take out the trash',
        status: 'Not Started',
        dueDate:  new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
        modifiedDate: new Date(2016, 3, 1, 2, 3, 4, 567),
        completedDate: new Date()
      }
    },
    
  }
