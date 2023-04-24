(()=>{

    //  Aplicando el principiio de responsabilidad única
    // Priorizando la composición sobre la herencia
    
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthday: Date;
    }
    
    class Person {

        public name: string;
        public gender: Gender;
        public birthday: Date;

        constructor({name,  gender,  birthday}: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
        }
    }

    interface Userprops {
        email: string;
        role: string;
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;
        
        constructor({email, role}: Userprops) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }

    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        
        constructor({workingDirectory, lastOpenFolder} : SettingsProps) {; 
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthday: Date;
    }

    
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthday,
            email, role,
            workingDirectory, lastOpenFolder
        }: UserSettingsProps) {
            this.person = new Person({name, gender, birthday});
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory, lastOpenFolder});
        }
    }

    const userSettings = new UserSettings({
        workingDirectory:'C:/users/Erick',
        lastOpenFolder:'C:/home',
        email:'erick@erick.com',
        role:'admin',
        name:'Erick',
        gender:'M',
        birthday:new Date('1998-09-16')
    });

    console.log({userSettings});

})();