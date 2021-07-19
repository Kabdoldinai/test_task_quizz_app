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
const gameApi = axios.create(config);

export const welcomeService = {

    startGame(startGameForm: StartGameForm) {
        return gameApi.post('?amount=' + startGameForm.amount + '&' + 'difficulty=' + startGameForm.selectedDifficulty);
    },

}
