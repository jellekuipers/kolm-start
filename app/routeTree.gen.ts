/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'
import { Route as AppIndexImport } from './routes/_app/index'
import { Route as AppProfileImport } from './routes/_app/profile'

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AppIndexRoute = AppIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppRoute,
} as any)

const AppProfileRoute = AppProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/profile': {
      id: '/_app/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AppProfileImport
      parentRoute: typeof AppImport
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppProfileRoute: typeof AppProfileRoute
  AppIndexRoute: typeof AppIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppProfileRoute: AppProfileRoute,
  AppIndexRoute: AppIndexRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AppRouteWithChildren
  '/profile': typeof AppProfileRoute
  '/': typeof AppIndexRoute
}

export interface FileRoutesByTo {
  '/profile': typeof AppProfileRoute
  '/': typeof AppIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_app/profile': typeof AppProfileRoute
  '/_app/': typeof AppIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/profile' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/profile' | '/'
  id: '__root__' | '/_app' | '/_app/profile' | '/_app/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/profile",
        "/_app/"
      ]
    },
    "/_app/profile": {
      "filePath": "_app/profile.tsx",
      "parent": "/_app"
    },
    "/_app/": {
      "filePath": "_app/index.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
