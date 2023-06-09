(()=>{

    //  No aplicando el principiio de responsabilidad única
    
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
        name: string;
        gender: Gender;
        birthday: Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;
        
        constructor({
            email,
            role,
            name,
            gender,
            birthday
        }: Userprops) {
            super({name, gender, birthday});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
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

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthday
            } : UserSettingsProps
        ) {
            super({email, role, name, gender, birthday}); 
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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