import React, { useState, useContext, useEffect } from 'react';
import { getAllDogs } from '../utils/dogUtils';
import { DogType } from '../types/dogTypes';

interface ProviderProps {
	children: React.ReactNode;
}

type fetchingStateType = 'success' | 'fetching' | 'failed';

export const DogContext = React.createContext(null as any);

export const DogProvider = ({ children }: ProviderProps) => {
	const [dogs, setDogs] = useState<DogType[]>([]);
	const [fetchingState, setFetchingState] =
		useState<fetchingStateType>('fetching');

	const getDogs = async () => {
		try {
			const tempDogs = await getAllDogs();
			setDogs(tempDogs);
			setFetchingState('success');
		} catch (err) {
			setDogs([]);
			setFetchingState('failed');
			console.error('Failed to retrieve dogs from api');
		}
	};

	useEffect(() => {
		getDogs();
	}, []);

	const value = {
		dogs,
		fetchingState,
	};

	return <DogContext.Provider value={value}>{children}</DogContext.Provider>;
};

export const useDogContext = () => useContext(DogContext);
