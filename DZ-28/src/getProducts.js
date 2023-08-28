"use strict";
// Since we have nowhere to get the goods, we simulate getting them with function getProducts.
function getProducts(category) {
  if (!category) {
    return null;
  }
  const monitors = [
    {
      productId: 45451554,
      name: "Mонитор 27 Samsung Curved C27R500 Dark Silver (LC27R500FHIXCI)",
      description:
        "Изогнутый экран монитора призван изменить ваши представления о просмотре развлекательного контента или работе. Благодаря его изогнутой матрице создается более широкое поле зрения, из-за чего его экран кажется больше, нежели экран плоского монитора аналогичной диагонали. Края изогнутого экрана находятся ближе к глазам пользователя, благодаря чему удалось понизить напряжения на глаза, т.к. им проще будет перефокусироваться от центра к краям изображения.",
    },
    {
      productId: 1545132324,
      name: `Монитор HP E242 / 24" (1920x1200) IPS / 1x VGA, 1x HDMI, 1x DP б/у`,
      description: `Широкоформатный монитор HP E242 с матрицей 24" (1920x1200) IPS для работы и домашних задач`,
    },
    {
      productId: 35433224,
      name: `Монитор 23.8" Asus VG249Q (90LM05E0-B03170`,
      description: `ASUS VG249Q – это 23.8-дюймовый монитор формата Full-HD с IPS-панелью, низким временем отклика (1 мс MPRT) и высокой частотой обновления экрана (144 Гц), который создан для любителей компьютерных игр. В нем реализованы различные геймерские функции и технологии, в том числе адаптивная синхронизация FreeSync и предустановленные режимы изображения GameVisual.`,
    },
    {
      productId: 254333123224,
      name: `Монитор 23.8" Acer Nitro Gaming VG240YHBMIIX`,
      description: `Игровой монитор от Acer получил 23.8-дюймовый экран с разрешением Full HD (1920х1080), которая придаст картинке четкости и реалистичности, и IPS-матрицу, которая позволяет не искажать картинку при изменении угла просмотра. Время отклика — всего 1 мс.

Компактный и при этом надежный компаньон для игр. Все преимущества технологии Radeon FreeSync воплощены в тонком IPS-мониторе серии VG240.`,
    },
  ];

  const processors = [
    {
      productId: 1232,
      name: "Processor1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem amet optio aliquid, pariatur,",
    },
    {
      productId: 12232,
      name: "Processor2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem amet optio aliquid, pariatur,",
    },
    {
      productId: 1432,
      name: "Processor3",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem amet optio aliquid, pariatur,",
    },
  ];

  const videocards = [
    {
      productId: 123223,
      name: "VideoCard1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem amet optio aliquid, pariatur,",
    },
    {
      productId: 14222232,
      name: "VideoCard2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem amet optio aliquid, pariatur,",
    },
    {
      productId: 1453232532,
      name: "VideoCard3",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem amet optio aliquid, pariatur,",
    },
  ];
  let result = "";
  switch (category) {
    case "monitors":
      result = monitors;
      break;
    case "processors":
      result = processors;
      break;
    case "videocards":
      result = videocards;
      break;
  }

  return result;
}
