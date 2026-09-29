import { router } from "./context";
import { urlRouter } from "./url";

export const trpcRouter=router({ // nested router
    url:urlRouter
})