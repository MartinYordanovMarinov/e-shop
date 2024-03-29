import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers,deleteUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SearchOrdersBox } from '../components/SearchOrdersBox';
import { SearchUsersBox } from '../components/SearchUsersBox';
import { Link } from 'react-router-dom';
import AdminPaginateUser from '../components/AdminPaginateUser';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const pageNumber = params.pageNumber || 1;

  const email = params.email;

  const userList = useSelector((state) => state.userList);
  const { loading, error, users,page,pages } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

   const userDelete = useSelector((state) => state.userDelete);
   const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers(email,pageNumber));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate,successDelete,userInfo,email,pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <h1>Потребители</h1>
      {!email ? (
        <div></div>
      ) : (
        <Link to="/admin/userlist" className="btn btn-light">
          Назад
        </Link>
      )}
      <SearchUsersBox />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ИДЕНТИФИКАТОР</th>
              <th>ИМЕ</th>
              <th>ИМЕЙЛ</th>
              <th>АДМИН</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstname}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <AdminPaginateUser pages={pages} page={page} />
    </>
  );
};

export default UserListScreen;
