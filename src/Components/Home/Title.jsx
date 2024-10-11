const Title = () => {
  const titles = [
    {
      hed: 'Payment only online',
      para: 'Tasig congregation behavior design. Mobile checkout. Ylig Kärrtorp.',
      image: '/Clip path group (1).png'
    },
    {
      hed: 'New stocks and sales',
      para: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
      image: '/SVG.png'
    },
    {
      hed: 'New stocks and sales',
      para: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
      image: '/Clip path group (3).png'
    },
    {
      hed: 'New stocks and sales',
      para: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
      image: '/Clip path group (4).png'
    },
  ]
  return <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-14 p-2">

    {
      titles.map((title, index) =>
        <div key={index}className="flex items-end justify-between gap-8">
          <img src={title.image} alt="" />
          <div >
            <h1 className="text-2xl font-semibold">{title.hed}</h1>
            <p>{title.para}</p>
          </div>
        </div>
      )
    }
  </div>;
};
export default Title;