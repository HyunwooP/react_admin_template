import _ from "lodash";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { signOut } from "../../../api/PostAPI";
import {
  getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem
} from "../../../core";
import { RoutePath } from "../../../route/routes";
import { Container } from "../../components";
import { ComponentIE } from "../../interface";
import { IconsMenu, SignMenu } from "./Menu";



/**
 * @description Header Component
 * @param {ComponentIE} props
 * @returns {React.ReactElement}
 */
const Header: React.FC<ComponentIE> = (
  props: ComponentIE
): React.ReactElement => {
  const {
    initUserInfoAction,
    reduxStore: { userStore },
  } = props;

  const history = useHistory();
  const _routePush = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history]
  );

  const { i18n } = useTranslation();
  const _setLaunage = useCallback(
    (lng: string) => {
      setLocalStorageItem({ lng });
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  const _signOut = async () => {
    try {
      const token = getLocalStorageItem("token");

      if (!_.isEmpty(token)) {
        await signOut();

        // token 삭제
        removeLocalStorageItem("token");
        // 리덕스 초기화
        initUserInfoAction();
        _routePush(RoutePath.SIGN_IN);
      } else {
        if (_.isFunction(window.globalFunc.showModalAction)) {
          window.globalFunc.showModalAction({
            type: "MESSAGE",
            item: {
              childrenProps: { message: "비정상적인 접근입니다." },
            },
          });
        }
        await signOut();
      }
    } catch (e) {
      console.log("_signOut Error", e);
    }
  };

  return (
    <Container.HeaderContainer>
      <IconsMenu _routePush={_routePush} _setLaunage={_setLaunage} />
      <SignMenu
        userInfo={userStore}
        _routePush={_routePush}
        _signOut={_signOut}
      />
    </Container.HeaderContainer>
  );
};

export default React.memo(Header);
