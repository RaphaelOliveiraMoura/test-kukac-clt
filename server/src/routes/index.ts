import { Router } from "express";
import CepController from "../controllers/CepController";
import MoneyController from "../controllers/MoneyController";
import PalindromeController from "../controllers/PalindromeController";
import VehicleController from "../controllers/VehicleController";

const routes = Router();
/**
 * Retorna informações do endereço apartir do cep passado
 */
routes.get('/cep/:cepValue', CepController.get);

/**
 * Retorna uma lista de números palindromos dentro de um
 * intervalo
 */
routes.get('/palindrome', PalindromeController.get);

/**
 * Retorna informações de notas possíveis para um troco
 * de uma dada compra
 */
routes.post('/money', MoneyController.purshace);

/**
 * Cria um veiculo do tipo moto e o salva em um arquivo JSON
 */
routes.post('/vehicles/moto', VehicleController.createMoto);

/**
 * Cria um veiculo do tipo passeio e o armazena em um arquivo JSON
 */
routes.post('/vehicles/passeio', VehicleController.createPasseio);

/**
 * Pega todos os veículos armazenados no JSON
 */
routes.get('/vehicles', VehicleController.listVehicles);

export default routes;