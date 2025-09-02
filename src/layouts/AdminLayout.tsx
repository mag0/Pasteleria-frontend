import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
    return (
        <>
            <header>
                <h1 className='font-bold text-center'>Admin Panel</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
