import { DogType } from '../types/dogTypes';

interface DogTestType extends DogType {
	alt: string;
}

export const testDog: DogTestType = {
	name: 'Test Dog',
	imgLink: '/test.jpg',
	alt: 'A Test Dog breed of dog',
};

export const testDog2: DogTestType = {
	name: 'Test Dog 2',
	imgLink: '/test-2.jpg',
	alt: 'A Test Dog 2 breed of dog',
};

interface alertStatesType {
	error: string;
	fetching: string;
}

export const alertStateMessages: alertStatesType = {
	error: 'Something went wrong. Please refresh to try again.',
	fetching: 'Fetching dogs...',
};
