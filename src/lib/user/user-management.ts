import prisma from "../db";

export async function getusers(
    // params: { id: string; value: string }[] | null,
    // search: string
  ) {
    // console.log("Params", params, search);
    // let query = params !== null && params?.length > 0 ? { ["where"]: {} } : {};
    // const query = { where: {} };
  
    // params?.map((param) => {
    //   if (query.where !== undefined) {
    //     if (param.id === "name") {
    //       query.where = {
    //         ...query.where,
    //         owner: { [param.id]: { contains: param.value, mode: "insensitive" } },
    //       };
    //       // query.where["owner"][param.id] = { contains: param.value, mode: 'insensitive', };
    //     } else {
    //       query.where = {
    //         ...query.where,
    //         [param.id]: { contains: param.value, mode: "insensitive" },
    //       };
    //       // query.where[param.id] = { contains: param.value, mode: 'insensitive', };
    //     }
    //   }
    //   // console.log("query0", query);
    //   return param;
    // });
  
    // if (search.length > 0) {
    //   query.where = {
    //     ...query.where,
    //     OR: [
    //       {
    //         bookName: {
    //           search: search,
    //         },
    //       },
    //       {
    //         author: {
    //           search: search,
    //         },
    //       },
    //       {
    //         category: {
    //           search: search,
    //         },
    //       },
    //       {
    //         status: {
    //           search: search,
    //         },
    //       },
    //     ],
    //   };
    //   // body: {
    //   // search: search,
    //   // },
    // }
    // console.log("Params", query);
  
    return await prisma.user.findMany({
    //   ...query,
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
    //   include: {
    //     owner: true,
    //   },
    });
  }
  