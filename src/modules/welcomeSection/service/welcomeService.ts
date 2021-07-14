import {StartGameForm} from "@/modules/welcomeSection/data/gameData";
import axios from 'axios';

interface Config {
    baseURl: string;
}

export const configParams: Config = {
    baseURl: 'https://opentdb.com/api.php',
};


const config = {
    baseURL: configParams.baseURl,
};
const triviaApi = axios.create(config);

export const welcomeService = {


    startGame(startGameForm: StartGameForm) {
        return triviaApi.post('?amount=' + startGameForm.amount + '&' + 'difficulty=' + startGameForm.selectedDifficulty);
    },

}
