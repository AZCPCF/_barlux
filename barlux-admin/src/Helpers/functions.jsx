import colors from "../Assets/colors";
import CreateIcon from "@mui/icons-material/Create";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { StyledTableCell, StyledTableRow } from "../Style/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Modal from "../Components/Modal";
export const GenerateUser = ({ users, navigate }) => {
  return users.map((user) => (
    <StyledTableRow key={user.id}>
      <StyledTableCell align="center">{user.name}</StyledTableCell>
      <StyledTableCell align="center">{user.email}</StyledTableCell>
      <StyledTableCell align="center">
        {user.phone_number ? user.phone_number : "*"}
      </StyledTableCell>
      <StyledTableCell align="center">
        <EditIcon
          onClick={() => {
            navigate(`/users/change/${user.id}`);
          }}
        />
      </StyledTableCell>
      <StyledTableCell align="center">
        <AccountBalanceWalletIcon
          onClick={() => {
            navigate(`/wallet/${user.id}`);
          }}
          style={{ color: `${colors.default}` }}
        />
      </StyledTableCell>
      <StyledTableCell align="center">
        <ContactMailIcon
          onClick={() => {
            navigate(`/addresses/${user.id}`);
          }}
          style={{ color: `${colors.default}` }}
        />
      </StyledTableCell>
    </StyledTableRow>
  ));
};
export const GenerateCategory = ({ categories, navigate }) => {
  // categories.find((d) => d.id === categori.parent_id)?.title || "*";
  return categories.map((category) => (
    <StyledTableRow key={category.id}>
      <StyledTableCell align="center">{category.title}</StyledTableCell>
      <StyledTableCell align="center">{"*"}</StyledTableCell>
      <StyledTableCell align="center">
        <EditIcon
          onClick={() => {
            navigate(`/changeUser/${category.id}`);
          }}
        />
      </StyledTableCell>
    </StyledTableRow>
  ));
};
export const GenerateDiscount = ({ discounts, open, Close, Open, onTrue }) => {
  return discounts.map((discount) => {
    let expiredAtTimeStamp = toTimeStamp(discount.expired_at);
    let expiredAtDate = new Date(discount.expired_at).toLocaleDateString(
      "fa-ir"
    );
    return (
      <StyledTableRow key={discount.id}>
        <StyledTableCell align="center">
          {discount.discount_code}
        </StyledTableCell>
        <StyledTableCell align="center">
          {discount.discount_percent}
        </StyledTableCell>
        <StyledTableCell align="center">{discount.max_amount}</StyledTableCell>
        <StyledTableCell align="center">{expiredAtDate}</StyledTableCell>
        <StyledTableCell align="center">
          {expiredAtTimeStamp - new Date().getTime() > 0 ? (
            <span style={{ color: colors.default }}>فعال</span>
          ) : (
            <span style={{ color: "red" }}>غیرفعال</span>
          )}
        </StyledTableCell>
        <StyledTableCell align="center">
          <DelIcon onClick={Open} />
        </StyledTableCell>
        <Modal
          text={"آیا میخواهید کد تخفیف را حذف کنید ؟"}
          open={open}
          Close={Close}
          onTrue={() => onTrue(discount.id)}
        />
      </StyledTableRow>
    );
  });
};

export const GenerateProduct = ({
  products,
  navigate,
  open,
  Close,
  Open,
  onTrue,
}) => {
  return products.map((product) => (
    <StyledTableRow key={product.id}>
      <StyledTableCell align="center">{product.title}</StyledTableCell>
      <StyledTableCell align="center">{product.price}</StyledTableCell>
      <StyledTableCell align="center">{product.stock}</StyledTableCell>
      <StyledTableCell align="center">
        {product.sub_category.title}
      </StyledTableCell>
      <StyledTableCell align="center">
        <EditIcon
          onClick={() => {
            navigate(`/products/change/${product.id}`);
          }}
        />
      </StyledTableCell>
      <StyledTableCell align="center">
        <DeleteIcon style={{ color: `${colors.default}` }} onClick={Open} />
      </StyledTableCell>
      <Modal
        text={"آیا میخواهید محصول را حذف کنید ؟"}
        open={open}
        Close={Close}
        onTrue={() => onTrue(product.id)}
      />
    </StyledTableRow>
  ));
};

export const toTimeStamp = (date) => {
  const timestamp = new Date(date);
  return timestamp.getTime();
};
export const generateMainCategoryOption = (categories) => {
  return categories.map((category) => {
    return { value: category.id, label: category.title };
  });
};
// 10 to 14 | 1 , 2 , 5 , 6
export const persianToEnglishNumbers = (text) => {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  persianNumbers.forEach((persianNumber, index) => {
    text = text.replace(persianNumber, englishNumbers[index]);
  });

  text = text.replace(/\//g, "-"); // Replace "/" with "-"

  return text;
};
export const generateCategoryObject = (categories) => {
  return categories.map((category) => {
    return {
      value: category.id,
      label: category.title,
    };
  });
};
export const GenerateOrder = ({ orders, open, Open, Close, onTrue }) => {
  return orders.map((order) => {
    return (
      <StyledTableRow key={order.id}>
        <StyledTableCell align="center">{order.total_amount}</StyledTableCell>
        <StyledTableCell align="center">{order.payment_type}</StyledTableCell>
        <StyledTableCell align="center">{order.user.name}</StyledTableCell>
        <StyledTableCell align="center">{order.status}</StyledTableCell>
        <StyledTableCell align="center">
          {order.order_submitted_at.string}
        </StyledTableCell>
        <StyledTableCell align="center">
          <DelIcon onClick={""} />
        </StyledTableCell>
      </StyledTableRow>
    );
  });
};

export const GenerateWallet = ({ wallets }) => {
  return wallets.map((wallet) => {
    return (
      <StyledTableRow key={wallet.id}>
        <StyledTableCell align="center">{wallet.amount}</StyledTableCell>
        <StyledTableCell align="center">
          {wallet.action === "increase" ? "افزایش" : "کاهش"}
        </StyledTableCell>
        <StyledTableCell align="center">
          {wallet.created_at.string}
        </StyledTableCell>
      </StyledTableRow>
    );
  });
};
export const GenerateAddress = ({ addresses }) => {
  return addresses.map((address) => {
    return (
      <StyledTableRow key={address.id}>
        <StyledTableCell align="center">{address.provinces}</StyledTableCell>
        <StyledTableCell align="center">{address.city}</StyledTableCell>
        <StyledTableCell align="center">{address.description}</StyledTableCell>
        <StyledTableCell align="center">
          {address.created_at.string}
        </StyledTableCell>
      </StyledTableRow>
    );
  });
};
export const GenerateOrderProducts = ({ orderProducts }) => {
  return orderProducts.map((orderProduct) => {
    return (
      <StyledTableRow key={orderProduct.id}>
        <StyledTableCell align="center">
          {orderProduct.product.title}
        </StyledTableCell>
        <StyledTableCell align="center">
          {orderProduct.product.price}
        </StyledTableCell>
        <StyledTableCell align="center">
          {orderProduct.quantity}
        </StyledTableCell>
        <StyledTableCell align="center">
          {orderProduct.product.sub_category.title}
        </StyledTableCell>
      </StyledTableRow>
    );
  });
};
export const DelIcon = ({ onClick }) => (
  <DeleteIcon style={{ color: `${colors.default}` }} onClick={onClick} />
);
export const EditIcon = ({ onClick }) => (
  <CreateIcon style={{ color: `${colors.default}` }} onClick={onClick} />
);
