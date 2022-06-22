import { DogMessageType, DogType } from '../types/dogTypes';
import { getAllDogsApi, getDogImageApi } from '../api/dogsApi';

// Takes the api message format, and converts it into a list of unique
// dog breeds
export const formatMessageForUniqueDogs = (
	message: DogMessageType
): string[] => {
	const uniqueDogs: string[] = [];

	// Loops through and adds all dog breeds to uniqueDogs and
	// if there are sub-breeds, creates a unique entry for each
	Object.entries(message).forEach(([breed, subBreeds]) => {
		if (subBreeds.length < 1) {
			uniqueDogs.push(breed);
		} else {
			subBreeds.forEach((subBreed) => {
				uniqueDogs.push(breed + ' ' + subBreed);
			});
		}
	});

	return uniqueDogs;
};

export const getImagesForDogs = async (dogs: string[]) => {
	const dogObjs: DogType[] = await Promise.all(
		dogs.map(async (dog) => {
			const img: string = await getDogImageApi(dog);

			return {
				name: dog,
				imgLink: img,
			};
		})
	);

	return dogObjs;
};

export const getAllDogs = async () => {
	const dogsMessage = await getAllDogsApi();
	const uniqueDogs = formatMessageForUniqueDogs(dogsMessage);
	const tempDogs = await getImagesForDogs(uniqueDogs);

	return tempDogs;
};
