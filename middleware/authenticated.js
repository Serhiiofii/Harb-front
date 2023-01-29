export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.authenticated) {
        return redirect('/login')
    }
    if (store.state.user.user_role === 'admin') {
        return redirect('/admin')
    } else if (store.state.user.user_role === 'user' || store.state.user.user_role === 'seller') {
        return redirect('/')
    }
}