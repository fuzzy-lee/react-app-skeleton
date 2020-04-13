import {useState, useEffect} from "react";


export const usePromise = (fn, deps = []) => {
    const [state, setState] = useState({
        loading: false,
        result: null,
        error: null,
    });

    useEffect(() => {
        setState({
            loading: true,
            result: null,
            error: null,
        });

        // fix race condition
        let didCancel = false;
        (async () => {
            let result;
            let error;
            try {
                result = await fn()
            } catch (err) {
                error = err
            } finally {
                if (!didCancel) {
                    setState({
                        loading: false,
                        result,
                        error,
                    })
                }
            }
        })();

        return () => didCancel = true
    }, deps);
};
