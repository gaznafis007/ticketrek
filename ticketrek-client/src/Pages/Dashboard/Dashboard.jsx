import  { useContext } from 'react';
import AdminDashboard from '../../components/AdminDashboard';
import CustomerDashboard from '../../components/CustomerDashboard';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/ui/Loading';
import { AuthContext } from '../../context/AuthProvider';

const Dashboard = () => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user?.uid && user?.role === 'admin'){
        return <AdminDashboard></AdminDashboard>
    }
    if(user?.uid && user?.role === 'customer'){
        return <CustomerDashboard></CustomerDashboard>
    }
    if( !user?.role){
        return <Navigate to='/login'></Navigate>
    }
};

export default Dashboard;