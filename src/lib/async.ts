type TryCatchResult<E, S> = [E, null] | [null, S];

export async function tryCatch<S, E extends Error>(
	someAsyncOperation: () => Promise<S>,
): Promise<TryCatchResult<E, S>> {
	try {
		return [null, await someAsyncOperation()];
	} catch (error) {
		return [{ message: error instanceof Error ? error.message : "An unexpected error occurred." } as E, null];
	}
}
