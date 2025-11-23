import { isServer, QueryClient } from "@tanstack/react-query";

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
			},
			mutations: {
				onError: (error) => {
					// const { message, statusCode } = handleErrorConfig(error);
					// const formattedMessage =
					// 	message === "jwt expired"
					// 		? "Unable to process request. Please try again"
					// 		: message;
					// toast.error(formattedMessage);
					// TODO Refactor this
					// if (statusCode === 401) {
					// 	setTimeout(() => {
					// 		redirect("/auth/login");
					// 	}, 550);
					// }
				},
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
	if (isServer) {
		return makeQueryClient();
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient();
		return browserQueryClient;
	}
}
