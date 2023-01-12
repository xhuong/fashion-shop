import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import ManagerCategoriesTable from "../../components/ManagerCategoriesTable";
import ManagerOrdersTable from "../../components/ManagerOrdersTable";
import ManagerProductsTable from "../../components/ManagerProductsTable";
import ManagerUsersTable from "../../components/ManagerUserTable";
import { useLazyGetAllUsersQuery } from "../../services/AuthAPI";
import { useLazyGetListCategoriesQuery } from "../../services/CategoryAPI";
import { useGetAllTableNameQuery } from "../../services/commonAPI";
import { useLazyGetAllProductOrderedQuery, useLazyGetAllProductQuery } from "../../services/ProductAPI";

const AdminLayout = () => {
  const { data, isSuccess } = useGetAllTableNameQuery();
  const [getUsersData, { data: usersData, isError, isSuccess: isSuccessGetAllUsers }] = useLazyGetAllUsersQuery({
    refetchOnFocus: true,
  });
  const [getListCategories, { data: categoryList, isSuccess: isSuccessGetCategories }] = useLazyGetListCategoriesQuery({
    refetchOnFocus: true,
  });
  const [getAllProductOrdered, { data: productOrderedList, isSuccess: isSuccessGetProductOrdered }] =
    useLazyGetAllProductOrderedQuery({
      refetchOnFocus: true,
    });
  const [getAllProduct, { data: allProducts, isSuccess: isSuccessGetAllProduct }] = useLazyGetAllProductQuery({
    refetchOnFocus: true,
  });

  const [options, setOptions] = useState([]);
  const [tableView, setTableView] = useState("");

  useEffect(() => {
    if (data?.length > 0 && isSuccess) {
      const initialOptions = [];
      data.map((item, index) => {
        const options = {
          name: "Manager " + item.TablesName,
          value: index,
          isActive: index === 0 ? true : false,
        };
        initialOptions.push(options);
      });
      setOptions(initialOptions);
    }
  }, [data]);

  useEffect(() => {
    if (options?.length > 0) {
      const activeOption = options.filter((option) => {
        return option.isActive === true;
      });
      switch (activeOption[0].value) {
        case 0:
          getListCategories();
          setTableView("category");
          break;
        case 2:
          getAllProductOrdered();
          setTableView("order");
          break;
        case 3:
          getAllProduct();
          setTableView("product");
          break;
        case 4:
          getUsersData();
          setTableView("user");
          break;
        default:
          getListCategories();
          setTableView("category");
          break;
      }
    }
  }, [options]);

  const handleChangeActive = (index) => {
    console.log("index", index);
    const newOptions = [...options];
    newOptions.forEach((ele, i, arr) => {
      if (index === ele.value && ele.isActive === false) {
        arr.forEach((ele) => {
          if (ele.isActive == true) {
            ele.isActive = false;
          }
        });
        ele.isActive = true;
      }
    });
    setOptions([...newOptions]);
  };

  return (
    <div className="admin">
      <div className="container">
        <div className="admin_container">
          <Row className="mt-4" gutter={[12]}>
            <Col xl={4}>
              <ul className="admin_tabar">
                {options.map((option, index) => (
                  <li
                    className={`capitalize cursor-pointer rounded-md py-4 px-4 mb-4 ${
                      option.isActive ? "text-green-700 bg-green-200" : ""
                    }`}
                    onClick={() => handleChangeActive(index)}
                  >
                    <span>{option.name}</span>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xl={20}>
              {tableView === "user" && <ManagerUsersTable dataSource={usersData} />}
              {tableView === "category" && <ManagerCategoriesTable dataSource={categoryList} />}
              {tableView === "order" && <ManagerOrdersTable dataSource={productOrderedList} />}
              {tableView === "product" && <ManagerProductsTable dataSource={allProducts} />}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
