import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import AdminCreateProductPageComponentFormDetailsInput from '../details/input';
import styles from '../sizes/styles.module.scss';
const AdminCreateProductPageComponentFormQuestions = ({
  product,
  setProduct,
  questions,
}) => {
  const handleChange = (i, e) => {
    const {
      target: { name, value },
    } = e;
    const values = [...questions];
    values[i][name] = value;
    setProduct({ ...product, questions: values });
  };

  const handleRemove = (i) => {
    if (questions?.length > 0) {
      const values = [...questions];
      values.splice(i, 1);
      setProduct({ ...product, questions: values });
    }
  };

  const handleAdd = () => {
    setProduct({
      ...product,
      questions: [
        ...questions,
        {
          question: '',
          answer: '',
        },
      ],
    });
  };

  console.log({ questions: product?.questions });
  return (
    <div>
      <div className={styles.header}>Questions</div>
      {questions?.length === 0 && (
        <IoAddCircle onClick={handleAdd} className={styles.svgIcon} />
      )}
      {questions &&
        questions?.map((el, i) => (
          <div key={i} className={styles.wrp}>
            <AdminCreateProductPageComponentFormDetailsInput
              handleChange={handleChange}
              i={i}
              name="question"
              placeholder={'Question'}
              value={el?.question}
            />
            <AdminCreateProductPageComponentFormDetailsInput
              handleChange={handleChange}
              i={i}
              name="answer"
              placeholder={'Answer'}
              value={el?.answer}
            />
            <IoRemoveCircle onClick={() => handleRemove(i)} />
            <IoAddCircle onClick={handleAdd} />
          </div>
        ))}
    </div>
  );
};

export default AdminCreateProductPageComponentFormQuestions;
