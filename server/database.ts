import {connect} from 'mongoose';

export const startConnection = async () => {
    try {
        const db = await connect("mongodb+srv://ramn:Samsung01@mevn-project.fdfvp.mongodb.net/?retryWrites=true&w=majority");
        console.log(db.connection.name);
    } catch (error) {
        console.error(error);
    }

}