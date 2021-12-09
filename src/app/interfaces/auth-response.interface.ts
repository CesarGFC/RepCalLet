export interface Login { 
        token: string
        user: {
            _id: string,
            name: string,
            role: string
        }

}