export class AuthService {
    private isAuntheticated = false;

    login() {
        this.isAuntheticated = true;
    }
    logout() {
        this.isAuntheticated = false;
    }
    isLoggedIn(): boolean {
        return this.isAuntheticated;
    }
}