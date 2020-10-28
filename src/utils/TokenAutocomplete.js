// TODO: This is a temporary client side solution
import TOKEN_STORE from '../store/TOKEN_STORE';
import Fuse from 'fuse.js'

const TokenAutoComplete = async (input) => {
    const tokens = new Fuse(TOKEN_STORE)
    return tokens.search(input).slice(0, 10)
}

export default TokenAutoComplete