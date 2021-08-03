import { getAPI } from "..";
import { defaultPagingCount } from "../../common/const";
import { SortType } from "../../common/interface";
import { UserInfoIE } from "../interface";
import { ContentsIE } from "./interface";

export const findUserCount = async ({
  searchKeyword = "",
}: {
  searchKeyword?: string;
}): Promise<number> => {
  try {
    const result: number = await getAPI("findUserCount", { searchKeyword });
    return result;
  } catch (e) {
    console.log("===============> findUserCount Error", e);
    throw e;
  }
};

export const findContentsCount = async ({
  searchKeyword = "",
}: {
  searchKeyword?: string;
}): Promise<number> => {
  try {
    const result: number = await getAPI("findContentsCount", { searchKeyword });
    return result;
  } catch (e) {
    console.log("===============> findContentsCount Error", e);
    throw e;
  }
};

export const findComponentCount = async (): Promise<number> => {
  try {
    const result: number = await getAPI("findComponentCount");
    return result;
  } catch (e) {
    console.log("===============> findComponentCount Error", e);
    throw e;
  }
};

export const findLayoutCount = async (): Promise<number> => {
  try {
    const result: number = await getAPI("findLayoutCount");
    return result;
  } catch (e) {
    console.log("===============> findLayoutCount Error", e);
    throw e;
  }
};

export const findStyleCount = async (): Promise<number> => {
  try {
    const result: number = await getAPI("findStyleCount");
    return result;
  } catch (e) {
    console.log("===============> findStyleCount Error", e);
    throw e;
  }
};

export const findThemeCount = async (): Promise<number> => {
  try {
    const result: number = await getAPI("findThemeCount");
    return result;
  } catch (e) {
    console.log("===============> findThemeCount Error", e);
    throw e;
  }
};

export const findUser = async ({
  skip = 0,
  searchKeyword = "",
  userEmailSort,
  userNicknameSort,
}: {
  skip: number;
  searchKeyword?: string;
  userEmailSort?: SortType;
  userNicknameSort?: SortType;
}): Promise<[UserInfoIE[], number]> => {
  try {
    const items = {
      take: defaultPagingCount,
      skip,
      searchKeyword: searchKeyword ?? "",
      userEmailSort: userEmailSort ?? "",
      userNicknameSort: userNicknameSort ?? "",
    };
    const result: Promise<[UserInfoIE[], number]> = await getAPI(
      "findUser",
      items
    );
    return result;
  } catch (e) {
    console.log("===============> findUser Error", e);
    throw e;
  }
};

export const findContents = async ({
  skip = 0,
  searchKeyword = "",
  contTitleSort,
  contSubTitleSort,
}: {
  skip: number;
  searchKeyword?: string;
  contTitleSort?: SortType;
  contSubTitleSort?: SortType;
}): Promise<[ContentsIE[], number]> => {
  try {
    const result: Promise<[ContentsIE[], number]> = await getAPI(
      "findContents",
      {
        take: defaultPagingCount,
        skip,
        searchKeyword: searchKeyword ?? "",
        contTitleSort: contTitleSort ?? "",
        contSubTitleSort: contSubTitleSort ?? "",
      }
    );
    return result;
  } catch (e) {
    console.log("===============> findContents Error", e);
    throw e;
  }
};

export const findComponent = async ({ skip = 0 }: { skip: number }) => {
  try {
    const result: any[] = await getAPI("findComponent", {
      take: defaultPagingCount,
      skip,
    });
    return result;
  } catch (e) {
    console.log("===============> findComponent Error", e);
    throw e;
  }
};

export const findLayout = async ({ skip = 0 }: { skip: number }) => {
  try {
    const result: any[] = await getAPI("findLayout", {
      take: defaultPagingCount,
      skip,
    });
    return result;
  } catch (e) {
    console.log("===============> findLayout Error", e);
    throw e;
  }
};

export const findStyle = async ({ skip = 0 }: { skip: number }) => {
  try {
    const result: any[] = await getAPI("findStyle", {
      take: defaultPagingCount,
      skip,
    });
    return result;
  } catch (e) {
    console.log("===============> findStyle Error", e);
    throw e;
  }
};

export const findTheme = async ({ skip = 0 }: { skip: number }) => {
  try {
    const result: any[] = await getAPI("findTheme", {
      take: defaultPagingCount,
      skip,
    });
    return result;
  } catch (e) {
    console.log("===============> findTheme Error", e);
    throw e;
  }
};

export const findDashboardCount = async () => {
  try {
    const result: any = await getAPI("findDashboardCount");
    return result;
  } catch (e) {
    console.log("===============> findDashboardCount Error", e);
    throw e;
  }
};

export const findUserProfile = async (): Promise<UserInfoIE> => {
  try {
    const result: UserInfoIE = await getAPI("findUserProfile");
    return result;
  } catch (e) {
    console.log("===============> findUserProfile Error", e);
    throw e;
  }
};
