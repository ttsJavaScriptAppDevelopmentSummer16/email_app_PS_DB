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
      status:['Not Started','In Progress','Complete'],
      attending:[-1,0,1]
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
    tasks: {
      task1: {
        priorty: 'Low',
        subject: 'Take out the trash',
        status: 'Not Started',
        dueDate:  new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
        modifiedDate: new Date(2016, 3, 1, 2, 3, 4, 567),
        completedDate: new Date(),
        importance: ['Very', 'Normal', 'Somewhat', 'None'],
        read: [true,false],
        category: ['Red', 'Yellow', 'Green', 'Blue']
      }
    },
    calendar: {
      calendar1: {
        organizer: 'priyam.sarma@outlook.com',
        subject: 'Family meeting about trash',
        content: 'Why is there trash everywhere?',
        attendees: [{email:'mom@outlook.com', attending:0}, {email:'dad@outlook.com',attending:-1}],
        location: 'House',
        startTime: new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
        endTime: new Date(2016, 3, 1, 2, 3, 4, 567),
        remindeer: new Date()
      }
    },
    mailBoxes: {
      inbox: {
        conversationId1: {
          from: 'priyam.sarma@outlook.com',
          to: 'mom@outlook.com',
          cc: '',
          subject: 'trash?',
          content: 'What do we do about all this trash?',
          size: 4000,
          dateTime: new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
          importance: 'Very',
          read: true,
          category: 'Yellow',
          status: 'Sent'
        },
        conversationId1: {
          from: 'mom@outlook.com',
          to: 'priyam.sarma@outlook.com',
          cc: '',
          subject: 'trash?',
          content: 'You clean it out.',
          size: 4000,
          dateTime: new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
          importance: 'Very',
          read: true,
          category: 'Yellow',
          status: 'Received'
        },
        conversationId1: {
          from: 'priyam.sarma@outlook.com',
          to: 'mom@outlook.com',
          cc: '',
          subject: 'trash?',
          content: 'No I will not',
          size: 4000,
          dateTime: new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
          importance: 'Very',
          read: true,
          category: 'Yellow',
          status: 'Sent'
        },
        conversationId2: {
          from: 'priyam.sarma@outlook.com',
          to: 'mom@outlook.com',
          cc: '',
          subject: 'Whats up with dad',
          content: 'Is He serious',
          size: 4000,
          dateTime: new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
          importance: 'Very',
          read: true,
          category: 'Yellow',
          status: 'Sent'
        }
      },
      deleted: {
        conversationId3: {
          from: 'everyone.else@outlook.com',
          to: 'priyam.sarma@outlook.com',
          cc: '',
          subject: 'Spam Much',
          content: 'Click on this tasty spam',
          size: 2000,
          dateTime: new Date(2016, 0, 1, 2, 3, 4, 567), //new Date(year, month [, day, hours, minutes, seconds, ms])
          importance: 'Very',
          read: true,
          category: 'Yellow',
          status: 'Received'
        }
      }
    }
  }

//  Get a list of inbox names
console.log(Object.keys(email.mailBoxes))
//  Get a list of emails
inboxNames = Object.keys(email.mailBoxes)
emails = []
for (var i = 0; i < inboxNames.length; i++) {
  convo = Object.keys(email.mailBoxes[inboxNames[i]])
//  console.log(convo)
  for (var j = 0; j < convo.length; j++) {
    emails.push(email.mailBoxes[inboxNames[i]][convo[j]])
  }
}
console.log(emails)
//  Get the text of the second email in the visible list
//  Mark an email as sent
//  Add a draft email to the drafts mailbox
