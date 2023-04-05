import React, { useState } from "react";
import { Header } from "../header/header.component";
import { Footer } from "../footer/footer.component";
import { TodoList } from "../todo-list/todo-list.component";
import { staticData } from "../../data/items";
import { ItemProps, ItemStatus } from "../../types/todo-item";

type StateProps = {
  tasks: Array<ItemProps>;
  activeItem: ItemProps | null;
};

export const TodoContainer = () => {
  const [data, setData] = useState<StateProps>({
    tasks: staticData,
    activeItem: null,
  });

  const handleAddNewItem = () => {
    /**
     * Nuevo Item
     */
    const newItem: ItemProps = {
      id: data.tasks.length + 1,
      description: "New Item",
      status: ItemStatus.IN_PROGRESS,
    };

    /**
     * coopiamos el arreglo anterior de data.tasks y le agregamos el new item
     */
    const newData = [...data.tasks, newItem];
    /**
     * copiamos todo el objeto de data y cambiamos solo la propiedad tasks
     * por el nuevo valor del array
     */
    setData({ ...data, tasks: newData });
  };

  const handleDeleteItem = (id: number) => {
    const newData: ItemProps[] = data.tasks.filter((item) => item.id !== id);
    setData({ ...data, tasks: newData });
  };

  const handleSelectItem = (item: ItemProps) => {
    setData({ ...data, activeItem: item });
  };

  const handleUpdateItem = (id: number, itemData: Partial<ItemProps>) => {
    const updateData: ItemProps[] = data.tasks.map((tarea) =>
      /**
       * ...tarea hace una copia de toda la informacion del objeto tarea
       * {id:2 , description:"item 2", status:"done"}
       * y modifica esta tarea solo la parte que tiene ...itemData
       * {description:"item 2 update"}
       */
      tarea.id === id ? { ...tarea, ...itemData } : tarea
    );
    /**
     * Creamos una copia de todo el objeto data modificando las propiedades
     * de task con la nueva info editada y su valor a null para cerrar la edicion
     */
    setData({ ...data, tasks: updateData, activeItem: null });
  };
  return (
    <>
      <Header dataLength={data.tasks.length} />
      <TodoList
        data={data.tasks}
        deleteItem={handleDeleteItem}
        activeItem={data.activeItem}
        onSelectItem={handleSelectItem}
        onUpdateItem={handleUpdateItem}
      />
      <Footer addNewItem={handleAddNewItem} />
    </>
  );
};
