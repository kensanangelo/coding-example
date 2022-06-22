import axios from 'axios';
import { DogMessageType } from '../types/dogTypes';

const DOG_API_API_ROUTE = 'https://dog.ceo/api';
const ALL_DOGS_ROUTE = `${DOG_API_API_ROUTE}/breeds/list/all`;

export const getAllDogsApi = async (): Promise<DogMessageType> => {
	const results = await axios.get(ALL_DOGS_ROUTE);

	if (results.status !== 200 || results.data.status !== 'success') {
		throw new Error('Api call status was not a success');
	}

	return results.data.message;
};

export const getDogImageApi = async (dog: string): Promise<string> => {
	const dogRoute = dog.replaceAll(' ', '/');
	const result = await axios.get(
		`${DOG_API_API_ROUTE}/breed/${dogRoute}/images/random`
	);

	if (result.status !== 200 || result.data.status !== 'success') {
		throw new Error('Api call status was not a success');
	}

	return result.data.message;
};
